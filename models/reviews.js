const mongoose = require('mongoose')

const Schema = mongoose.Schema
const reviewSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    orderID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'orders'
    }
})

module.exports = mongoose.model('reviews', reviewSchema)