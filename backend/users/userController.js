const userService = require("./userService")

module.exports = {
    login: async (req, res) => {
        try {
            const [valid, token, refreshToken] = await userService.login(req)
            if (valid) {
                res.cookie("token", token, { httpOnly: true })
                res.cookie("refreshToken", refreshToken, { httpOnly: true })
                return res.status(200).send({ "message": "signin successful", "token": token, "refreshToken": refreshToken })
            } else {
                return res.status(401).send("Invalid username or password")
            }
        }
        catch (error) {
            console.log("error in login", error)
            return res.status(500).send("error in logging")
        }
    },

    refreshToken: (req, res) => {
        try {
            const [valid, newToken] = userService.refresh(req)
            if (valid) {
                res.cookie("token", newToken, { httpOnly: true })
                return res.status(200).send({ "message": "refresh successful", "token": newToken })
            } else {
                return res.status(401).send("Invalid refresh token")
            }
        } catch (error) {
            console.log("error in refreshing token", error)
            return res.status(500).send("error in server")
        }
    },

    logout: (req, res) => {
        res.clearCookie("token")
        res.clearCookie('refreshToken')
        res.status(200).send('logout successful')
    },

    temp: (req, res) => {
        res.status(200).send("testing")
    }
}