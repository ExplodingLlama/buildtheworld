'use strict';

// src/services/user/hooks/restrict-user-to-owner.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
      
      //if it's an internal call ignore this hook
      if (!hook.params.provider) {
      return hook;
      }
      
      //We need to get the id of the user and add it to our query
      hook.params.query._id = hook.params.user._id;
      
      return hook;
  };
};
