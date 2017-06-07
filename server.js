'use strict';
const restify = require('restify');

let handle = (req, res, next) => {
    res.charSet('utf-8');
    res.contentType = 'json';
    res.json({msg: 'Hello Heroku ' + ENVIRONMENT + '!'})
    return next();
};

const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.NODE_ENV || 'local';

const server = restify.createServer({
    name: 'heroku-test-app'
});

server.use(restify.bodyParser({ mapParams: false }));

server.get('/', handle);

server.listen(PORT, () => {
    console.log('Listening on port: %s', PORT);
});
