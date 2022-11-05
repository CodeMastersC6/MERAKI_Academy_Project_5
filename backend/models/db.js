// connecting to PostgreSQL
const {Pool} = require('pg');

// Please note to create DB_URL in your .env file to connect the DB with your SQL backend

const connectionString = process.env.DB_URL;

const pool = new Pool({
    connectionString,
});

pool.connect((err, pool) => {
    if(err) {
        console.error('client didn\'t connect', err.message, err.stack);
        return;
    }

    console.log('pool connected on ' + pool.user);
})

module.exports = {pool};