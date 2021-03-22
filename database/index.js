const mysql = require('mysql');
const { connectionData } = require('./mysql.config');

const connection = mysql.createConnection({
  host: connectionData.localhost,
  user: connectionData.user,
  password: connectionData.password,
  database: connectionData.database,
});

const getAirbnbSite = (productId, callback) => {
  const query = 'select * from details where productId = ?';

  connection.query(query, productId, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  connection, getAirbnbSite,
};
