const { Client } = require("pg");
const { DB_USER, DB_HOST, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

const client = new Client({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
  ssl: true,
});

module.exports = client;