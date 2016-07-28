'use strict';
const feeds = require('./feeds');
const karmaprofiles = require('./karmaprofiles');
const initiatives = require('./initiatives');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(initiatives);
  app.configure(karmaprofiles);
  app.configure(feeds);
};
