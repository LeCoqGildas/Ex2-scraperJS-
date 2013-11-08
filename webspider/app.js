var express = require('express');
//var scraper = require('./scraper');
var app = express();

app.enable('trust proxy');


app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.listen(3000);
console.log('Listening on port 3000');