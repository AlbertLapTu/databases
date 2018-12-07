var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => { //ref the models file, the messages obj within it, and the get key 
        if (err) {
          res.send(err);
        } else {//If the response is bad, do nothing 
        console.log('hi mike');
        res.send(results);   //else, if the response is good, run the callback
        }
      });
    }, 

    post: function (callback) {
    //   models.messages.post(function(err, results) {
    //     if (err) {
    //       console.log('This is an error!');
    //     } else {
    //       res.sendStatus(200);
    //       res.send(JSON.stringify(res.body));
    //     }
    //   })
    }
  },
  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) { //ref the models file, the messages obj within it, and the get key 
        if (err) {
          console.log('This is an error');
        } else {//If the response is bad, do nothing
        res.send(JSON.stringify(req.body));
        }
    });
  },
    post: function (req, res) {
    //   models.users.post(fuction(err, results)) {
    //     if (err) {
    //       console.log('This is an error!');
    //     } else {
    //       res.sendStatus(200);
    //       res.send(JSON.stringify(res.body));
    //     }
    //   }
    // }
    }
  } 
}
  
