'use strict';

var service = require('feathers-mongoose');
var initiatives = require('./initiatives-model');
var hooks = require('./hooks');

module.exports = function () {
  var app = this;

  var options = {
    Model: initiatives,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/initiatives', service(options));

  // Get our initialize service to that we can bind hooks
  var initiativesService = app.service('/initiatives');

  // Set up our before hooks
  initiativesService.before(hooks.before);

  // Set up our after hooks
  initiativesService.after(hooks.after);
};