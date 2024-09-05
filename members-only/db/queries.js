const pool = require('./pool');

async function newUser (content, password) {
    await pool.query(`INSERT INTO users (first_name, last_name, email, password, salt) 
                    VALUES
                    ('${content.firstname}', '${content.lastname}', '${content.email}', '${password.hash}', '${password.salt}')
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

module.exports = {
    newUser,
    fetchUser,
    fetchUserId
}