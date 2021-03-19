const mysql = require('mysql');
import sampleData from './sample-data.js'

var connection = mysql.createConnection({
  host     : sampleData.localhost,
  user     : sampleData.user,
  password : sampleData.password,
  database : sampleData.airbnb,
});

module.exports = conneciton;