const userRoutes = require("./userRoutes")
const reviewRoutes = require('./reviews')
const express = require('express')
const router = express.Router();
const orderRoutes = require("./orders");

router.use('/users',userRoutes)
router.use('/orders', orderRoutes)
router.use('/reviews', reviewRoutes )
// @desc Private Route
router.get('/', (req,res)=>{
    res.json(
        `
        Hello How Are You 
        
        `
    )
})
module.exports = router