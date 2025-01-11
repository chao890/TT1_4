
const express = require('express')
const userRouter = require('./users/userRouter')
const { HOST_PORT } = require('./config/config');
const cookieParser = require('cookie-parser')

const PORT = HOST_PORT || 3001
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(userRouter)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});