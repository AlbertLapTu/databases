var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
//Lies within the server, to direct route requests to the database
var router = require('./routes.js');

//Read express apps to get a better understanding

var app = express();

//All of the express routing functions (look it up)
module.exports.app = app;

// Set what we are listening on
app.set('port', 3000);

// Logging and parsing 
//More express stuff
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
//Express calls our routes.js file to determine to send it to the messages or the users directory
app.use('/classes', router);

// Serve the client files
//Retrieve the files from somewhere, and send it back to the view(client);
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}


/*
app.js = "view" in MVC

*/

