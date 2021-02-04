const mongoose = require('mongoose')


var connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_SECRET, {useNewUrlParser: true, useUnifiedTopology: true })
        console.log("DB connected!")
    } catch (error) {
        console.log("Error!!")
    }
}


module.exports = connectDB

