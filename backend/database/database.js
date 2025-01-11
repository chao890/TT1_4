const mysql2 = require('mysql2')
const { DB_PASSWORD } = require('../config/config')

const pool = mysql2.createPool({
    host: 'localhost',
    user: "root",
    port: '3001',
    password: DB_PASSWORD,
    database: "hackathon"
}).promise()


module.exports = pool

