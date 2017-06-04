'use strict';
// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');


// Create a new Mongoose connection instance
const db = configureMongoose();

// Create a new Express application instance
const app = configureExpress(db);

// Configure the Passport middleware
const passport = configurePassport();

// Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);

// Listen on provided port, on all network interfaces.
app.listen(port, () => console.log(`API running on localhost:${port}`));