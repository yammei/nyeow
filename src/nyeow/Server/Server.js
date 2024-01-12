const { comparePasswords, hashPassword, insertUser } = require('./AccountFunctions');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { pool, envFileCheck } = require('./DatabaseConnection');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/signup', async (req, res) => {
    console.log("API: Signup endpoint reached.");

    // Retrieve user and pass from request body
    const { username, password } = req.body;

    // If no entries, return error
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required.' });
    }

    // Check if username already exists
    const checkUsernameQuery = 'SELECT COUNT(*) AS count FROM users WHERE username = ?';
    const checkUsernameValues = [username];

    pool.query(checkUsernameQuery, checkUsernameValues, async (checkUsernameErr, checkUsernameResult) => {
        if (checkUsernameErr) {
            console.error('Error checking username:', checkUsernameErr);
            return res.status(500).json({ error: 'Internal server error' });
        }

        // If count is greater than 0, username already exists
        if (checkUsernameResult[0].count > 0) {
            return res.status(409).json({ error: 'Username already exists' });
        }

        // Argon2 password encryption
        const hashedPassword = await hashPassword(password);

        // Insert account values to database
        insertUser(res, username, hashedPassword);
    });
});

// Login endpoint
app.post('/api/login', async (req, res) => {
    console.log("API: Login endpoint reached.");

    // Retrieve user and pass from request body
    const { username, password } = req.body;

    // If no entries, return error
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password required.' });
    }

    // SQL query to retrieve user's hashed password
    const sql = 'SELECT hashed_password FROM users WHERE username = ?';
    const values = [username];

    pool.query(sql, values, async (err, result) => {
        if (err) {
            console.error('Error retrieving user data:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        // Check if user exists
        if (result.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const storedHashedPassword = result[0].hashed_password;

        // Compare passwords
        try {
            const passwordMatch = await comparePasswords(password, storedHashedPassword);
            console.log("Password Match: ", passwordMatch);

            if (passwordMatch) {
                return res.status(200).json({ message: 'Login successful' });
            } else {
                return res.status(401).json({ error: 'Invalid username or password' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});