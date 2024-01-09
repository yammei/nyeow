// destinationFile.js
import * as accountTools from './accountFunctions';

const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./database');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/signup', async (req, res) => {
    // Retrieve user and pass from request body
    const { username, password } = req.body;

    // If no entries, return error
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required.' });
    }

    // Argon2 password encryption
    const salt = accountTools.generateSalt();
    const hashedPassword = await accountTools.hashPassword(password, salt);

    // SQL query
    const sql = 'INSERT INTO users (username, hashed_password, salt) VALUES (?, ?, ?)';
    const values = [username, hashedPassword, salt];

    pool.query(sql, values, (err, result) => {
        if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).json({ error: 'Internal server error' });
        }
        return res.status(201).json({ message: 'User registered successfully' });
    });
  });


// Login endpoint
app.post('/api/login', async (req, res) => {
    try {
        // Retrieve user and pass from request body
        const { username, password } = req.body;

        // Check for username matches
        const userResult = await pool.query('SELECT * FROM users WHERE username = ? LIMIT 1', [username]);
        if (userResult.length === 0) {
        return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Password validation
        const storedHash = userResult[0].hashed_password;
        const storedSalt = userResult[0].salt;
        const isPasswordValid = await comparePasswords(password, storedHash, storedSalt);
        if (isPasswordValid) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

