const express = require("express");
const router = express.Router();
const userController = require("./userController");
const { authenticate } = require("./userService");

router.get("/users/info", authenticate, userController.temp);
router.get("/users/requests", userController.getAllRequests);
router.delete("/users/:id", userController.deleteRequest);

module.exports = router;
