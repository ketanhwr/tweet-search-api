var restify = require('restify');
var routes = require('./routes');

var server = restify.createServer();

routes(server);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});
