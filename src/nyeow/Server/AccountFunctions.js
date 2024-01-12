const { pool } = require('./DatabaseConnection');
const argon2 = require('argon2');

// Argon2 parameters
const options = {
    timeCost: 3,
    memoryCost: 65536,
    parallelism: 1,
    type: argon2.argon2id,
  };

// ENCRYPTION: Hash a password using Argon2
async function hashPassword(password) {
    try {
        const hash = await argon2.hash(password, options);
        return hash;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
}

// VERIFICATION: Compares for password match
async function comparePasswords(enteredPassword, storedHash) {
  try {
    const match = await argon2.verify(storedHash, enteredPassword);
    if (match) {
      console.log('Password matches');
      return true;
    } else {
      console.log('Password does not match');
      return false;
    }
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
}

// DATABASE: Insert usernamed and hashed password into users table
async function insertUser(res, username, hashedPassword) {
  const insertUserQuery = 'INSERT INTO users (username, hashed_password) VALUES (?, ?)';
  const insertUserValues = [username, hashedPassword];

  pool.query(insertUserQuery, insertUserValues, (insertErr, insertResult) => {
      if (insertErr) {
          console.error('Error inserting user:', insertErr);
          return res.status(500).json({ error: 'Internal server error' });
      }
      return res.status(201).json({ message: 'User registered successfully' });
  });
}

module.exports = {
  comparePasswords,
  hashPassword,
  insertUser
};
