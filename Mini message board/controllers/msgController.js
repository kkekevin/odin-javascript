const asyncHandler = require("express-async-handler");
const msg = require('../models/msgModel');
const db = require("../db/queries");

const getUserById = asyncHandler(async (req, res) => {
  const username = req.params.user;
  const user = await db.fetchMessage(username);
  if (!user) {
    throw new Error("User not found");
  }
  res.render('messageDetails', { title: "Mini Messageboard Details", message: user });
});

module.exports = { getUserById };
