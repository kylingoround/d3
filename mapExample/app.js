var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render("index.ejs")
})

app.get('/exercise', function(req,res) {
  res.render("exercise.ejs")
})

app.get('/classCode', function(req, res) {
  res.render("classCode.ejs")
})

app.get('/exercise2', function(req, res) {
  res.render('exercise2');
})

app.listen(3000, function() {
  console.log('Server listening on port 3000');
})
