const asyncHandler = require("express-async-handler");
const msg = require('../models/msgModel');

const getUserById = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  const user = await msg[userId];
  console.log(userId);

  if (!user) {
    throw new Error("User not found");
  }
  res.render('messageDetails', { title: "Mini Messageboard", message : user });
});

module.exports = { getUserById };
