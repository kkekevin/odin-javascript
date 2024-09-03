const pool = require('./pool');

async function newUser (content, password) {
    await pool.query(`INSERT INTO users (first_name, last_name, email, password, salt) 
                    VALUES
                    ('${content.firstname}', '${content.lastname}', '${content.email}', '${password.hash}', '${password.salt}')
        ;`);
}

module.exports = {
    newUser
}