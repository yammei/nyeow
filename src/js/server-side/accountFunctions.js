const argon2 = require('argon2');
const crypto = require('crypto');

const options = {
    timeCost: 3,
    memoryCost: 65536,
    parallelism: 1,
    type: argon2.argon2id,
  };

async function comparePasswords(enteredPassword, storedHash, storedSalt) {
    const combinedValue = enteredPassword + storedSalt;
    const hashedPassword = await argon2.hash(combinedValue);

    // Compare the generated hash with the stored hash
    if (hashedPassword === storedHash) {
      return true;
    } else {
      return false;
    }
}

function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

// Hash a password using Argon2
async function hashPassword(password) {
    try {
        const hash = await argon2.hash(password, options);
        return hash;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
}