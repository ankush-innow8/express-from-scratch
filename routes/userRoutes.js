const { loginUser, registerUser } = require("../controllers/userController")
const express = require("express")
const router = express.Router()
const { validateUser } = require('../validators/express-validation')

router.post('/register',validateUser, registerUser)
router.get('/login', loginUser)
 
module.exports = router

