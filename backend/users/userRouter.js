const express = require("express");
const router = express.Router();
const userController = require("./userController");
const { authenticate } = require("./userService");

router.post("/users/signin", userController.signin);
router.post("/users/signup", userController.signup);
router.get("/users/info", authenticate, userController.temp);
router.get("/users/requests", userController.getAllRequests);
router.delete("/:id", userController.deleteRequest);

module.exports = router;
