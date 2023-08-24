const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees'
});
//We only need one connection to mysql

connection.connect(function (error) {
    if (error) console.error(error)
})

module.exports = connection
//We are exporting the value of connection