const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const users = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
})

users.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})


//without middleware
// users.methods.mysave = async function()  {
//     this.password = await bcrypt.hash(this.password, 10)
//     this.save()
// }

module.exports = mongoose.model('users', users) 