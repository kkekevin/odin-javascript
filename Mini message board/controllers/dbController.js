const db = require("../db/queries");

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  //console.log("Usernames: ", messages);
  //res.send("Usernames: " + messages.map(user => user.username).join(", "));
  res.render('index', { title: "Mini Messageboard", messages: messages });
}

async function insertMessage (req, res) {
  const content = req.body;
  //messages.push({ text: content.messageText, user: content.messageUser, added: new Date() });
  db.insertMessage(content);
  res.redirect('/');
}

async function deleteMessage (req, res) {
  const username = req.params.user;
  db.deleteMessage(username);
  res.redirect('/');
}


module.exports = {
  insertMessage,
  getAllMessages,
  deleteMessage
}