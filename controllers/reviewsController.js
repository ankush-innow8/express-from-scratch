const Reviews = require('../models/reviews')

const post_reviews = async (req, res, next) => {
    const { comment, user_id, orderID, order_name } = req.body
    try {
        let review = new Reviews({
            comment, user_id, orderID , order_name
        })
        await review.save()
        console.log(review)
        res.json(review)
        
    } catch (error) {
        res.send(error)
    }
}

const get_reviews = async (req, res, next) => {
    const { orderID  } = req.body
    try {
        const isReview = await Reviews.find().populate('orderID', ['order_name']).populate('user_id', ['name'])
        if (!isReview) return res.json({ msg: " No orders yet :( " })
        res.json(isReview)
    } catch (error) {
        res.json(error.message)
    }
    
}

module.exports = {post_reviews, get_reviews}