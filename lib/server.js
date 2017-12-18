'use strict';
const restify = require('restify');
let mainRouter = require('./mainRouter');

const server = restify.createServer({
    name: 'heroku-test-app'
});

server.use(restify.plugins.queryParser({mapParams: true}));
server.use(restify.plugins.bodyParser({mapParams: true}));

mainRouter.applyRoutes(server);

module.exports = server;
