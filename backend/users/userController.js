const userService = require("./userService")
const pool = require("../database/database")

module.exports = {
    login: async (req, res) => {
        try {
            const [valid, token] = await userService.login(req)
            if (valid) {
                res.cookie("token", token, { httpOnly: true })
                return res.status(200).send("signin successful")
            } else {
                return res.status(401).send("Invalid username or password")
            }
        }
        catch (error) {
            console.log("error in login", error)
        }
    },

    temp: (req, res) => {
        res.status(200).send("testing")
    }, 

    getBalance: aync (req, res) => {
        const companyName = req.body.companyName
        const [carbonBalanceRes, cashBalanceRes] = await pool.query("SELECT carbonBalance, cashBalance FROM company WHERE companyName=?", [companyName])
        return res.status(200).send({carbonBalance: carbonBalanceRes, cashBalance: cashBalanceRes})
    }
}