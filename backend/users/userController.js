const userService = require("./userService")

module.exports = {
    login: async (req, res) => {
        const [valid, token] = await userService.singin(req)
        if (valid) {
            res.cookie("token", token, { httpOnly: true })
            return res.status(200).send("signin successful")
        } else {
            return res.status(401).send("Invalid username or password")
        }
    },

    temp: (req, res) => {
        res.status(200).send("testing")
    },

    createRequest: async (req,res) => {
        const { companyId, requestorCompanyId, carbonUnitPrice, carbonQuantity, requestReason } = req.body;
        const requestStatus = "Pending";
        const requestType = "";
        const createdDate = Date.now();
        
        const alertMessage = `You have a request from ${requestorCompanyId} for ${carbonQuantity} units at $${carbonUnitPrice} unit price.`;        
        console.log("Testing")
        const result = userService.createRequest([
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
    ]);
    
    }
}