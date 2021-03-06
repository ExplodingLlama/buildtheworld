'use strict';

var restrictUserToOwner = require('./restrict-user-to-owner');

var globalHooks = require('../../../hooks');
var hooks = require('feathers-hooks');
var auth = require('feathers-authentication').hooks;

exports.before = {
  all: [],
  find: [auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated(), restrictUserToOwner()],
  get: [auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated(), auth.restrictToOwner({ ownerField: '_id' })],
  create: [auth.hashPassword()],
  update: [auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated(), auth.restrictToOwner({ ownerField: '_id' })],
  patch: [auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated(), auth.restrictToOwner({ ownerField: '_id' })],
  remove: [auth.verifyToken(), auth.populateUser(), auth.restrictToAuthenticated(), auth.restrictToOwner({ ownerField: '_id' })]
};

exports.after = {
  all: [hooks.remove('password')],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};