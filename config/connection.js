//pull in the required dependencies
var mysql = require('mysql');

//create the MySQL connection object
var connection;

if (process.env.JAWBD_URL) {
    //DB is JawsDB on Herku
    connnection = mysql.createConnection(process.envJAWSBD_URL);

} else {
    //db is local on localhost
    connection = mysql.createConnections({
        port: 3306, 
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    })
};

// make the connection to mysql
connnection.connect(function(err){
    if (err) {
        console.error('ERROR: MySQL datadbase as id' + err.stack + '\n\n');
        return;
    }
    console.log('Connected to MySql database as id' + connection.threadId + '\n\n');
});

//exports connectionfor ORM use
module.exports = connection;