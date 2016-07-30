'use strict';

// src/services/user/hooks/restrict-to-owner.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

var defaults = {};

module.exports = function (options) {
  options = Object.assign({}, defaults, options);

  return function (hook) {
    hook.restrictToOwner = true;
  };
};