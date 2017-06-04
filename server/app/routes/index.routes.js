'use strict';
const path = require('path');
// Define the routes module' method
module.exports = function(app) {
    // Catch all other routes and return the index file
    app.get('/', (req, res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, '../../../dist/client/index.html'));
    });
};