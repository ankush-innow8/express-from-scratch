var express = require('express')
const connectDB = require('./config/db')
const auth = require('./middleware/auth')
const privateAuth = require('./middleware/privateAuth')
const indexRouter = require('./routes/index')
require('dotenv/config')

//middelware
var app = express()

app.use(express.json())
app.use(privateAuth)
connectDB()

//routers

app.use('/api', indexRouter)

var PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('Server started!')
})
