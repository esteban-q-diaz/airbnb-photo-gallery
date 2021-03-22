const express = require('express')
const PORT = 3000;
const path = require('path')
const app = express();
var bodyParser = require('body-parser')

//this is needed to make the public folder available to the server
app.use('/', express.static(path.join(__dirname, '..', 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// app.get('/getdetails', function(req, res) {
//   res.send(202)
// })


app.listen(PORT, (err) => {
  if (err) {
    console.log('error at server', err)
  } else {
    console.log(`Server running on localhost:${PORT}`)
  }
})