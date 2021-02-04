const mongoose = require('mongoose')

const orders = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
    ,
     order_name: {
         type: String,
         required: true
     },
     order_qty: {
        type: Number,
        required: true
    },
    order_price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('orders', orders)