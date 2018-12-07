var db = require('../db');


//Here's where we want to query and retrieve data from our database. (Models)
module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', function(err, res) {
        if (err) {
          console.log('You have an error');
        } else {
          callback(res.body);
        }
      })
    }, // a function which produces all the messages
    post: function (messageObject) {
      //will need to use a question mark in here in order to pass message in easier
      // without escaping within a string
      db.query('INSERT INTO messages (message) VALUES( ? )'), [`${messageObject.message}`], function(err, res) {
        if (err) {
          console.log('You have an error');
        } else {
          callback(res.body);
        }
      }
    } 
  },

  users: {
    // Ditto as above.
    //We pass in a callback as a GET request is async. 
    get: function (callback) {
      //Query the database using db.query('SQL COMMAND', queryArgs..?, callback(err, results));
      db.query('SELECT users FROM messages', [], function(err,res){
        if (err) {
          console.log('You have an error');
        } else {
          callback(res.body);
        }
      })
    },
    post: function (messageObject) {}
  }
};

