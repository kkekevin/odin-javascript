const pool = require('./pool');

async function newUser (content) {
    await pool.query(`INSERT INTO users (first_name, last_name, email, password) 
                    VALUES
                    ('${content.firstname}', '${content.lastname}', '${content.email}', '${content.password}')
        ;`);
}

module.exports = {
    newUser
}