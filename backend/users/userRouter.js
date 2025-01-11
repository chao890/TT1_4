const express = require('express')
const router = express.Router()
const userController = require('./userController')
const { authenticate } = require('./userService')

router.post("/users/login", userController.login)
// router.get("/users/info", authenticate, userController.temp) to test jwt token authentication
router.get('/refresh', userController.refreshToken)
router.get('/logout', userController.logout)
module.exports = router