const userService = require("./userService")

module.exports = {
    signin: async (req, res) => {
        const [valid, token] = await userService.singin(req)
        if (valid) {
            res.cookie("token", token, { httpOnly: true })
            return res.status(200).send("signin successful")
        } else {
            return res.status(401).send("Invalid username or password")
        }
    },

    signup: (req, res) => {
        userService.signup(req)
            .then(result => res.status(200).send("Signup success"))
            .catch(error => {
                if (error.code == "ER_DUP_ENTRY") {
                    res.status(422).send("Username is already taken")
                } else {
                    res.status(500).send("Internal server error")
                }
            })
    },

    temp: (req, res) => {
        res.status(200).send("testing")
    }
}