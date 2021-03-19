// const express = require('express')
// const PORT = 3030;
// const path = require('path')
// const app = express();


// app.use(express.static('public', { maxAge: 31557600 }));

// // app.use(express.static(__dirname + '/public'));

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

// app.listen(PORT, (err) => {
//   if (err) {
//     console.log('error at server', err)
//   } else {
//     console.log(`Server running on localhost:${PORT}`)
//   }
// })