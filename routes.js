var controllers = require('./controllers.js');

module.exports = function(server) {
    server.get('/', controllers.home.get);
};
