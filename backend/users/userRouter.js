const express = require('express')
const router = express.Router()
const userController = require('./userController')
const { authenticate } = require('./userService')

router.post("/users/login", userController.login)
router.get("/users/info", authenticate, userController.temp)
router.get("/users/getBalance", userController.getBalance)

module.exports = router