const auth = require("./auth")

module.exports = (req, res, next) => {
    const arr = ['/', '/register', '/login']
    if (arr.includes(req.originalUrl)){
        next()
    } else {
        auth(req, res, next)
    }
}