'use strict';
const restify = require('restify');

let handle = (req, res, next) => {
    res.charSet('utf-8');
    res.contentType = 'json';
    res.json({msg: 'Hello Heroku ' + ENVIRONMENT + '!'})
    return next();
};

const ENVIRONMENT = process.env.NODE_ENV || 'local';

const server = restify.createServer({
    name: 'heroku-test-app'
});

server.use(restify.bodyParser({ mapParams: false }));

server.get('/', handle);

module.exports = server;
