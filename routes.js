var controllers = require('./controllers.js');

module.exports = function(server) {
  server.get('/tweets/:id', controllers.tweet.get);
  server.post('/tweets/', controllers.tweet.post);
};
