/* eslint-disable no-console */
const express = require('express');

const PORT = process.env.PORT || 3000;
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const { getAirbnbSite } = require('../database/index.js');

app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/getdetails/:productId', (req, res) => {
  const { productId } = req.params;

  getAirbnbSite(productId, (err, results) => {
    if (err) {
      res.send(404);
    } else {
      res.send(results);
    }
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('error at server', err);
  } else {
    console.log(`Server running on localhost:${PORT}`);
  }
});
