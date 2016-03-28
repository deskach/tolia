var express = require('express');
var path = require('path');

var app = express();
var rootPath = path.normalize(__dirname + '/../Web/');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath));

app.get('*', function (req, res) {
  res.sendFile(rootPath + 'index.html');
});

app.listen(8001);
console.log('Listeneing on port 8001...');

