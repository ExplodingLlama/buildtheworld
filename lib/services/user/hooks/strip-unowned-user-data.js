'use strict';

// src/services/user/hooks/strip-unowned-user-data.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

var defaults = {};

module.exports = function (options) {
  options = Object.assign({}, defaults, options);

  return function (hook) {
    //The hook contains the id of the requesting user. We compare that id to all the 
    //items in the result and only keep the one that's the same.

    //if it's an internal call ignore this hook
    if (!hook.params.provider) {
      return hook;
    }

    var newData = [];

    hook.result.data.forEach(function (current) {
      if (current._id.toString() == hook.params.user._id.toString()) {
        newData = newData.concat(current);
      }
    });

    hook.result = newData;
    return hook;
  };
};