//http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/
//http://www.atinux.fr/2011/10/15/tutoriel-sur-mongoose-mongodb-avec-node-js/

//for run the server the command is: (for me, it's depend where you install mongoDB)
//C:\mongodb\bin\mongod.exe --dbpath C:\mongodb\data

//host:127.0.0.1, port:28017
//use mongoose module
var mongoose = require('mongoose');


//use the scraper bdd
mongoose.connect('mongodb://localhost/scraper', function(err) {
  if (err) { throw err; }
});


//schema
var linkUrlSchema = new mongoose.Schema({
  linkUrl : String,
  date : { type : Date, default : Date.now }
});

//model used
var urlModel = mongoose.model('url', linkUrlSchema);

//create an object, 
var theLinkUrl = new urlModel({ linkUrl : url });




theLinkUrl.save(function (err) {
  if (err) { throw err; }
  console.log('Link add to the BDD !');
});






// if we use mongoose.connect()
//mongoose.connection.close();








module.exports = mongoDB;
