var controllers = require('./controllers');

module.exports = function(server) {
  server.get('/tweets/:id', controllers.tweet.get);
  server.post('/tweets/', controllers.tweet.post);
  server.del('/tweets/:id', controllers.tweet.del);
  server.put('/tweets/:id', controllers.tweet.put);
};
