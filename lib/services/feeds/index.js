'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var hooks = require('./hooks');
var app;

var Service = function () {
  function Service(options) {
    _classCallCheck(this, Service);

    this.options = options || {};
  }

  _createClass(Service, [{
    key: 'find',
    value: function find(params) {

      var initiativeService = app.service('initiatives');
      return initiativeService.find();
    }
  }, {
    key: 'get',
    value: function get(id, params) {
      return this.find(params);
    }
  }]);

  return Service;
}();

module.exports = function () {
  app = this;

  // Initialize our service with any options it requires
  app.use('/feeds', new Service());

  // Get our initialize service to that we can bind hooks
  var feedsService = app.service('/feeds');

  // Set up our before hooks
  feedsService.before(hooks.before);

  // Set up our after hooks
  feedsService.after(hooks.after);
};

module.exports.Service = Service;