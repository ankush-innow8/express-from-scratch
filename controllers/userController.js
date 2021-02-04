const Users = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const registerUser = async (req, res, next) => {
        const {name, email, password} = req.body;
        try {
            const isUser = await Users.findOne({email})
            if( isUser ) return res.json({msg : "Email already exists."})
            let user = new Users({
              name,
              email, 
              password,
            })
            
            await user.save()
            res.json(user)
        }
     catch (error) {
        res.send(error)
    }
}

const loginUser = async(req, res, next) => {
    const {email, password} = req.body;
    try {
        const isUser = await Users.findOne({ email })
        if (!isUser) return res.send("User not found")
        const isMatch = await bcrypt.compare(password, isUser.password)
        if (!isMatch) return res.send("Wrong password")

        const token = jwt.sign({_id: isUser._id}, process.env.TOKEN_SECRET)
        res.header('x-auth-token', token).json({token})
      } catch (error) {
        res.send("Invalid email or password")
        console.log(error.message)
      }
}

module.exports = {registerUser, loginUser}