const mysql2 = require("mysql2");
const { DB_PASSWORD } = require("../config/config");

const pool = mysql2
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: DB_PASSWORD,
    database: "hackathon",
  })
  .promise();

module.exports = pool;
