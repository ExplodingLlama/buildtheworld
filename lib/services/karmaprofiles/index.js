'use strict';

var service = require('feathers-mongoose');
var karmaprofiles = require('./karmaprofiles-model');
var hooks = require('./hooks');

module.exports = function () {
  var app = this;

  var options = {
    Model: karmaprofiles,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/karmaprofiles', service(options));

  // Get our initialize service to that we can bind hooks
  var karmaprofilesService = app.service('/karmaprofiles');

  // Set up our before hooks
  karmaprofilesService.before(hooks.before);

  // Set up our after hooks
  karmaprofilesService.after(hooks.after);
};