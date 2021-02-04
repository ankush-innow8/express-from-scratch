var express = require("express")
const connectDB = require("./config/db")
const auth = require("./routes/auth")
const indexRouter = require('./routes/index')
require('dotenv/config')
//middelware
var app = express()

app.use(express.json());
//app.use(auth);
connectDB();

//routers

app.use('/api',indexRouter);


app.listen(5000, () => {
    console.log("Server started!")
})