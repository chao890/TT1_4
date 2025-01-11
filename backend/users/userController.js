const userService = require("./userService");
const pool = require("../database/database.js");

module.exports = {
  login: async (req, res) => {
    try {
      const [valid, token, refreshToken] = await userService.login(req);
      if (valid) {
        res.cookie("token", token, { httpOnly: true });
        res.cookie("refreshToken", refreshToken, { httpOnly: true });
        return res.status(200).send("signin successful");
      } else {
        return res.status(401).send("Invalid username or password");
      }
    } catch (error) {
      console.log("error in login", error);
    }
  },

  temp: (req, res) => {
    res.status(200).send("testing");
  },

  getAllRequests: async (req, res) => {
    try {
      const requests = await userService.getAllRequests(req.query);
      res.json({ requests });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteRequest: async (req, res) => {
    try {
      const response = await userService.deleteRequest(req.params.id);
      res.json(response);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
};
