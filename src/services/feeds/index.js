'use strict';

const hooks = require('./hooks');
var app;

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
      
      const initiativeService = app.service('initiatives');
      return initiativeService.find();
  }

  get(id, params) {
    return this.find(params);
  }
}

module.exports = function(){
  app = this;

  // Initialize our service with any options it requires
  app.use('/feeds', new Service());

  // Get our initialize service to that we can bind hooks
  const feedsService = app.service('/feeds');

  // Set up our before hooks
  feedsService.before(hooks.before);

  // Set up our after hooks
  feedsService.after(hooks.after);
};

module.exports.Service = Service;
