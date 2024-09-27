const { body } = require("express-validator");

const newUserValidation = [
    body('confirmPassword')
        .trim()
        .custom((value, { req }) => {
            return value === req.body.password;
        })
        .withMessage('Password confirmation does not match')
]

module.exports = newUserValidation;