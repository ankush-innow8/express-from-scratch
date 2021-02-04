const {order_details, get_order_details} = require('../controllers/ordersController')

const router  = require('express').Router()

router.post('/', order_details)
router.get('/', get_order_details)

module.exports = router