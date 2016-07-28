'use strict';

const service = require('feathers-mongoose');
const initiatives = require('./initiatives-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: initiatives,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/initiatives', service(options));

  // Get our initialize service to that we can bind hooks
  const initiativesService = app.service('/initiatives');

  // Set up our before hooks
  initiativesService.before(hooks.before);

  // Set up our after hooks
  initiativesService.after(hooks.after);
};
