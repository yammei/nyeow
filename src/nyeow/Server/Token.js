const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = {
    userId: user.id,
    username: user.username,
    // Add additional claims as needed
  };

  const options = {
    expiresIn: '1h', // Token expiration time
  };

  const secretKey = 'your-secret-key'; // Replace with a strong, secret key
  return jwt.sign(payload, secretKey, options);
};
