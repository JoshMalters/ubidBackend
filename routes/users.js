var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* Sql connection */
var con = mysql.createConnection({
  host: 'mydbinstance.cm5wpx2yyi3i.us-west-2.rds.amazonaws.com',
  user: 'ae0m',
  password: 'Coldwater007',
  database: 'ubdb'
})

con.connect(function(err) {
  if (err) {
    console.log('Error connecting to db')
    return;
  }
  console.log('Connection established');
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  con.query('SELECT * FROM users',function(err,rows) {
    if(err) {
      console.log(err);
      return;
    }
    console.log('Data received from Db:\n');
    console.log(rows);
  });
});

module.exports = router;
