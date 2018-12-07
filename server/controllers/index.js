var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) { //ref the models file, the messages obj within it, and the get key 
        if (err) {
          console.log('This is an error!');
        } //If the response is bad, do nothing 
        JSON.stringify(res.body)   //else, if the response is good, run the callback
      });
    }, 
    post: function (req, res) {

    }
  },
  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) { //ref the models file, the messages obj within it, and the get key 
        if (err) {
          console.log('This is an error');
        } //If the response is bad, do nothing 
        JSON.stringify(res.body)
    });
  },
    post: function (req, res) {
      // if (err) {
      //   console.log('This is an error');
      // }
      // models.users.post(function(err, result) {
      //   if (err) {
      //     console.log('This is an error');
      //   }
        //NEed to do something here, once the work on the models has finished)
    }
  }
}



/*
Sample request object
// username: 'Valjean',
// message: 'In mercy\'s name, three days is all I need.',
// roomname: 'Hello


When a request (POST/GET) comes from the client in the form of the above request object
The controller needs to look at it, and verify that it's a valid request
If the request is valid, send it off and respond back with a success code
  Sending it off = sending to controller to run a query on the db
If the request is invalid, return back an err

The req object represents the HTTP request. 
HTTP response is the res object











*/