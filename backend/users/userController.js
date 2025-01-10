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
            var datetime = new Date()
            datetime.setDate(datetime.getDate()-7)
            console.log("Date: ", datetime)
            const [row] = await pool.query("SELECT alertMessage FROM requests WHERE companyId=? AND updatedDatetime<?", [companyId, datetime])
            res.status(200).send({data: row})
        }catch(error){
            console.log("Error in getting overdue requests", error)
        }
    },

    createRequest: async (req,res) => {
        const { companyName, requestorCompanyName, carbonUnitPrice, carbonQuantity, requestReason, requestType } = req.body;
        const [companyrow] = await pool.query("SELECT id FROM company WHERE companyName=?", [companyName,])
        
        const [requestercompanyrow] = await pool.query("SELECT id FROM company WHERE companyName=?", [requestorCompanyName,])

        const requestStatus = "Pending";
        const createdDate = Date.now();
        const companyId = companyrow[0]["id"]
        const requestorCompanyId = requestercompanyrow[0]["id"]
        const alertMessage = `You have a request from ${requestorCompanyId} for ${carbonQuantity} units at $${carbonUnitPrice} unit price.`;        
        console.log("Testing")
        try {
            const request = [
                companyId,
                requestorCompanyId,
                carbonUnitPrice,
                carbonQuantity,
                requestReason,
                requestStatus,
                requestType,
                createdDate,
                createdDate,
                alertMessage,
              ];
            let sql = `INSERT INTO requests(companyId, requestorCompanyId,carbonUnitPrice,carbonQuantity,requestReason,requestStatus,requestType, createdDatetime,updatedDatetime,alertMessage) VALUES(?,?,?,?,?,?,?,NOW(),NOW(),?)`;
            console.log(request);
            const [row] = await pool.query(sql, request);
            console.log("done adding");
            return res.status(200).send({ data: row });
            } catch (error) {
            console.log(error);
            console.log("Error in creating request");
            }},
    //     const result = userService.createRequest([
    //   companyId,
    //   requestorCompanyId,
    //   carbonUnitPrice,
    //   carbonQuantity,
    //   requestReason,
    //   requestStatus,
    //   requestType,
    //   createdDate,
    //   createdDate,
    //   alertMessage,
    // ])}
    editRequest: async(req, res) => {
        try{
            const companyId = req.body.companyId
            const companyName = req.body.companyName
            const requestStatus = req.body.requestStatus
            const requestType = req.body.requestType
            const carbonPrice = req.body.carbonPrice
            const carbonQuantity = req.body.carbonQuantity
            const requestReason = req.body.requestReason
        
            const updatedTime = new Date()
            const [row] = await pool.query("UPDATE requests SET ? WHERE companyId=?", [companyId, companyName, requestReason,requestStatus, requestType, carbonPrice, carbonQuantity]);
            res.status(200).send({data: row})

            console.log("Request edited successfully")
        }
        catch(error){
            console.log("Error in editing request", error)
        }
    }


}