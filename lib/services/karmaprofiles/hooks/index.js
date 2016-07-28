'use strict';

var globalHooks = require('../../../hooks');
var hooks = require('feathers-hooks');
var auth = require('feathers-authentication').hooks;

exports.before = {
  all: [auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated()],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};