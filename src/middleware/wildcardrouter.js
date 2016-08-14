'use strict';

const path = require('path');

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    //if request url is either of the listed services, then skip this middleware
    if(req.url==='/users' || req.url==='/initiatives' || req.url==='/karmaprofiles' || req.url==='/feeds') {
      next(app);
    }
    else {
      res.sendFile(path.resolve(app.get('public'), 'index.html'));
      next(app);
    }


  };
};
