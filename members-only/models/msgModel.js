const { body } = require("express-validator");
const MAX_MSG_LEN = 250;

const messageValidation = [
    body('message')
        .trim()
        .isLength({ max: MAX_MSG_LEN })
        .withMessage(`max characters in this message is ${MAX_MSG_LEN}`)
]

module.exports = messageValidation;