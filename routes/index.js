const userRoutes = require("./userRoutes")
const express = require('express')
const router = express.Router();
const auth = require('./auth');
const orderRoutes = require("./orders");

router.use('/users',userRoutes)
router.use('/orders', orderRoutes)
// @desc Private Route
router.get('/', auth ,(req,res)=>{
    res.json(
        `
        Hello How Are You 
        
        `
    )
})
module.exports = router