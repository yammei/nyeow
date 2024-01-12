const mysql = require('mysql2');
const dotenv = require('dotenv');
const { promisify } = require('util');

dotenv.config();

const pool = mysql.createPool({
  connectionLimit: 2,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

function envFileCheck() {
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASSWORD);
  console.log(process.env.DB_NAME);
}

pool.query = promisify(pool.query).bind(pool);

module.exports = {
  pool,
  envFileCheck
};