const pool = require("../database/database")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config/config')

module.exports = {
    login: async (req) => {
        const username = req.body.username
        console.log(bcrypt.hashSync("pass", 10))
        const [row] = await pool.query("SELECT password FROM users WHERE username=?", [username])
        if (!row.length || !row[0]["password"]) {
            return [false, null]
        }
        valid = await bcrypt.compare(req.body.password, row[0]["password"])
        if (!valid) {
            return [false, null]
        }
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

        return [true, token]
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
    }
}