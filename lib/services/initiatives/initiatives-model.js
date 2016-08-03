'use strict';

// initiatives-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var initiativesSchema = new Schema({
    _id: String,
    title: String,
    description: String,
    location: {
        longitude: Number,
        latitude: Number
    },
    tags: [String],
    data: String,
    images: String,
    videos: String,
    ownerId: String,
    userList: [String],
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now },
    status: String
});

var initiativesModel = mongoose.model('initiatives', initiativesSchema);

module.exports = initiativesModel;