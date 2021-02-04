const Orders = require('../models/orders')

const order_details = async(req,res,next) => {
    const { user_id, order_name,order_qty, order_price  } = req.body
    try {
        let order = new Orders({
            user_id, order_name,order_qty, order_price
        })
        await order.save()
        res.json(order)

    } catch (error) {
        res.send(error)
    }
}

const get_order_details = async (req, res, next) => {
    const { user_id, order_name, order_qty, order_price } = req.body
    try {
        const isOrder = await Orders.findOne({order_name: 'Pasta'})
        if (!isOrder) return res.send("Order not found!!")
        res.send(isOrder)

    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports = { order_details, get_order_details }
