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
    
    getBalance: async (req, res) => {
        try {
            const companyName = req.body.companyName
            const [row] = await pool.query("SELECT carbonBalance, cashBalance FROM company WHERE companyName=?", [companyName])
            res.status(200).send({data: row})
        }catch(error){
            console.log("Error in getBalance", error)
        }
    },

    updateStatus: async(req, res) => {
        try {
            const companyId = req.body.companyId
            const requestStatus = req.body.requestStatus
            const [row] = await pool.query("UPDATE requests SET requestStatus=? WHERE companyId=?", [requestStatus, companyId])
            res.status(200).send({data: row})
        }catch(error){
            console.log("Error in updating request status", error)
        }
    }, 

    getOverdue: async(req, res) => {
        try {
            const companyId = req.body.companyId
            var datetime = new Date();
            const [row] = await pool.query("SELECT allertMessage FROM requests WHERE companyName=?", [companyName])

        }catch(error){
            console.log("Error in getting overdue requests", error)
        }
    }


}