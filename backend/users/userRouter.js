const express = require('express')
const router = express.Router()
const userController = require('./userController')
const { authenticate } = require('./userService')

router.post("/users/login", userController.login)
router.get("/users/info", authenticate, userController.temp)
router.post("/users/requests/createrequest", userController.createRequest)
module.exports = router