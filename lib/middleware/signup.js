'use strict';

module.exports = function (app) {
  return function (req, res, next) {
    var body = req.body;

    // Get the user service and `create` a new user
    app.service('users').create({
      email: body.email,
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password
    })
    // Then redirect to the login page
    .then(function (user) {
      return res.redirect('/login.html');
    })
    // On errors, just call our error middleware
    .catch(next);
  };
};