const router = require('express').Router()
const {post_reviews, get_reviews} = require('../controllers/reviewsController')

router.post('/', post_reviews)

router.get('/', get_reviews)

module.exports = router