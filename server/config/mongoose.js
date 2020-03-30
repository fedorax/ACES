'use strict';
// Load the module dependencies
const bluebird = require('bluebird');
const config = require('./config'),
  mongoose = require('mongoose');

mongoose.Promise = bluebird;
// Define the Mongoose configuration method
module.exports = function () {
  // Use Mongoose to connect to MongoDB
  const db = mongoose.connect(config.db, {
    useCreateIndex: true,
    useNewUrlParser: true
  });

  // Load the MongoDb model
  require('./models')();
  // Return the Mongoose connection instance
  return db;
};
