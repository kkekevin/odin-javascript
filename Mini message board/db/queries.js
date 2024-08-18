const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(content) {
  await pool.query(`INSERT INTO messages (username, text, added) 
                    VALUES
                    ('${content.messageUser}', '${content.messageText}', '${new Date()}');
`);
}

async function fetchMessage(username) {
  const { rows } = await pool.query(`SELECT * FROM messages WHERE username = '${username}';`);
  return rows;
}

async function deleteMessage(username) {
  await pool.query(`DELETE FROM messages WHERE username='${username}' ;`);
}


module.exports = {
  getAllMessages,
  insertMessage,
  fetchMessage,
  deleteMessage
};
