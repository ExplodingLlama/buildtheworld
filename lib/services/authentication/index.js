'use strict';

var authentication = require('feathers-authentication');

var FacebookStrategy = require('passport-facebook').Strategy;
var FacebookTokenStrategy = require('passport-facebook-token');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var GoogleTokenStrategy = require('passport-google-token').Strategy;

module.exports = function () {
  var app = this;

  var config = app.get('auth');

  config.facebook.strategy = FacebookStrategy;
  config.facebook.tokenStrategy = FacebookTokenStrategy;
  config.google.strategy = GoogleStrategy;
  config.google.tokenStrategy = GoogleTokenStrategy;

  app.set('auth', config);
  app.configure(authentication(config));
};