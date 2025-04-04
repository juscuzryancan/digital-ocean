const { Client } = require("pg");
const { CONNECTION_STRING } = process.env;

const client = new Client({
  connectionString: CONNECTION_STRING,
});

module.exports = client;