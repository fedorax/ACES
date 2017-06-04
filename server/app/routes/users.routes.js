// Load the module dependencies
const users = require('../../app/controllers/users.controller'),
    passport = require('passport');

// Define the routes module' method
module.exports = function(app) {
    // Set up the 'signup' routes
    app.route('/api/auth/signup').post(users.signup);

    // Set up the 'login' routes
    app.route('/api/auth/login').post(users.login);

    // Set up the 'signout' route
    app.route('/api/auth/signout').get(users.signout);

    // Set up the Facebook OAuth routes
    app.get('/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/login'
    }));
    app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/login',
        successRedirect: '/'
    }));

    // Set up the Twitter OAuth routes
    app.get('/oauth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/login'
    }));
    app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/login',
        successRedirect: '/'
    }));

    // Set up the Google OAuth routes
    app.get('/oauth/google', passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ],
        failureRedirect: '/login'
    }));
    app.get('/oauth/google/callback', passport.authenticate('google', {
        failureRedirect: '/longin',
        successRedirect: '/'
    }));
};