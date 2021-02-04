const jwt = require('jsonwebtoken')

const auth =  (req, res, next) => {
    try {
        const token  = req.header('x-auth-token')
        if(!token) return res.json({error: "token not found"})
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user= decoded.user;
        next();
    } catch (error) {
        res.json({ message: error.message })
    }
    
}


module.exports = auth