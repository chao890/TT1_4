const pool = require("../database/database")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config/config')

module.exports = {
    login: async (req) => {
        const username = req.body.username
        const [row] = await pool.query("SELECT password FROM users WHERE username=?", [username])
        if (!row.length || !row[0]["password"]) {
            return [false, null]
        }
        valid = await bcrypt.compare(req.body.password, row[0]["password"])
        if (!valid) {
            return [false, null]
        }
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
        const refreshToken = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1d' })

        return [true, token, refreshToken]
    },

    authenticate: (req, res, next) => {
        const token = req.cookies.token
        try {
            const user = jwt.verify(token, SECRET_KEY)
            req.user = user
            next()
        } catch (err) {
            res.clearCookie("token")
            return res.status(401).json({ redirect: "/temp" });
        }
    },

    refresh: (req, res) => {
        const refreshToken = req.cookies.token
        console.log(refreshToken, 'testing')
        try {
            const user = jwt.verify(refreshToken, SECRET_KEY)
            const newToken = jwt.sign({ user }, SECRET_KEY, { expiresIn: "1h" });
            return [true, newToken]
        } catch (error) {
            return [false, null]
        }
    }
}