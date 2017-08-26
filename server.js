var restify = require('restify');
var mongoose = require('mongoose');
var routes = require('./routes');

var server = restify.createServer();
server.use(restify.plugins.queryParser());

routes(server);

server.listen(8080, function() {
  mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
  mongoose.Promise = global.Promise;

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('%s listening at %s', server.name, server.url);
  });
});
