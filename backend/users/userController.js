const userService = require("./userService");
const pool = require("../database/database.js");
const requestService = require("./requestService");

module.exports = {
  login: async (req, res) => {
    const [valid, token] = await userService.singin(req);
    if (valid) {
      res.cookie("token", token, { httpOnly: true });
      return res.status(200).send("signin successful");
    } else {
      return res.status(401).send("Invalid username or password");
    }
  },

  temp: (req, res) => {
    res.status(200).send("testing");
  },

  signup: (req, res) => {
    userService
      .signup(req)
      .then((result) => res.status(200).send("Signup success"))
      .catch((error) => {
        if (error.code == "ER_DUP_ENTRY") {
          res.status(422).send("Username is already taken");
        } else {
          res.status(500).send("Internal server error");
        }
      });
  },

  getAllRequests: async (req, res) => {
    try {
      const requests = await requestService.getAllRequests(req.query);
      res.json({ requests });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteRequest: async (req, res) => {
    try {
      const response = await requestService.deleteRequest(req.params.id);
      res.json(response);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
};
