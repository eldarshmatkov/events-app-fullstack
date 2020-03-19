var express = require('express');
var app = express();

/* GET users listing. */
app.post('/send', function(req, res, next) {
  // res.send('respond with a resource');
  console.log('send!!');
});

module.exports = app;
