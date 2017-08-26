var restify = require('restify');
var mongoose = require('mongoose');
var routes = require('./routes');
var config = require('./config');

var server = restify.createServer();
server.use(restify.plugins.queryParser());

routes(server);

server.listen(config.port, function() {
  mongoose.connect(config.db_uri, { useMongoClient: true });
  mongoose.Promise = global.Promise;

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('%s listening at %s', server.name, server.url);
  });
});
