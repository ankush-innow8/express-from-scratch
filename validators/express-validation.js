const  { check, validationResult} = require('express-validator');

exports.validateUser = [
    check("email")
      .notEmpty()
      .withMessage("email required")
      .isEmail()
      .withMessage("Enter valid email!"),
      check("password").notEmpty().withMessage("password cannot be empty"),
    check("name").notEmpty().withMessage("Required field"),

    (req, res, next) => {
      const result = validationResult(req)
      if (!result.isEmpty()) return res.json([
        { 
            err: result.array() 
        }]
        );
        next()
    }
  ];