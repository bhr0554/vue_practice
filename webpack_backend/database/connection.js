/** DB연결 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'data~secret!',
    database: 'study_db'
});

connection.connect(function (err) {
    if(err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    } else {
        console.log('mysql connection success');
    }
});

module.exports = connection;
