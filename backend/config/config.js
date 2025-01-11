const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    DB_PASSWORD: process.env.DB_PASSWORD,
    HOST_PORT: process.env.HOST_PORT,
    SECRET_KEY: process.env.SECRET_KEY
}