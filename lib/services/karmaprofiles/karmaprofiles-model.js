'use strict';

// karmaprofiles-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var karmaprofilesSchema = new Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

var karmaprofilesModel = mongoose.model('karmaprofiles', karmaprofilesSchema);

module.exports = karmaprofilesModel;