const mysql = require('mysql');
const connection = mysql.createConnection({
host: 'localhost',
user:'root',
password:'',//password of your mysql db
database:'signup'
});

connection.connect(function(err){
(err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
});

require('./routes/html-routes')(app, connection);