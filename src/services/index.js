'use strict';
const feeds = require('./feeds');
const karmaprofiles = require('./karmaprofiles');
const initiatives = require('./initiatives');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  var mongodburl = process.env.OPENSHIFT_MONGODB_DB_URL;
  mongoose.connect(mongodburl);
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(initiatives);
  app.configure(karmaprofiles);
  app.configure(feeds);
};
