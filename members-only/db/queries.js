const pool = require('./pool');

async function newUser (content, password) {
    await pool.query(`INSERT INTO users (first_name, last_name, email, password, salt, admin) 
                        VALUES
                        ('${content.firstname}', '${content.lastname}', '${content.email}', '${password.hash}', '${password.salt}', FALSE)
        ;`);
}

async function fetchUser (content) {
    const { rows } = await pool.query(`SELECT * FROM users WHERE email='${content}' ;`);
    return rows[0];
}

async function fetchUserId (id) {
    const { rows } = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
    return rows[0];
}

async function insertMsg (user_id, msg) {
    await pool.query(`INSERT INTO messages (message, added, user_id)
                        VALUES
                        ('${msg}', '${new Date}', ${user_id})
                    ;`);
}

async function getAllMsgs () {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function getUserMsgs (id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE user_id = $1", [id]);
    return rows;
}



module.exports = {
    newUser,
    fetchUser,
    fetchUserId,
    insertMsg,
    getAllMsgs,
    getUserMsgs
}