'use strict';

const service = require('feathers-mongoose');
const karmaprofiles = require('./karmaprofiles-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: karmaprofiles,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/karmaprofiles', service(options));

  // Get our initialize service to that we can bind hooks
  const karmaprofilesService = app.service('/karmaprofiles');

  // Set up our before hooks
  karmaprofilesService.before(hooks.before);

  // Set up our after hooks
  karmaprofilesService.after(hooks.after);
};
