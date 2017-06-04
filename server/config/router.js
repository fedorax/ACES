'use strict';

// Define the routes module' method
module.exports = function(app) {
    // Load the routing files
    require('../app/routes/users.routes.js')(app);
    require('../app/routes/index.routes.js')(app);
};