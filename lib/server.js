'use strict';
const restify = require('restify');
let mainRouter = require('./mainRouter');

const server = restify.createServer({
    name: 'heroku-test-app'
});

server.use(restify.fullResponse());
server.use(restify.bodyParser({ mapParams: false }));

mainRouter.applyRoutes(server);

module.exports = server;
