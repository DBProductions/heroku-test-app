'use strict';
const Router = require('restify-router').Router;
let routerInstance = new Router();

const ENVIRONMENT = process.env.NODE_ENV || 'local';

let handle = (req, res, next) => {
    res.charSet('utf-8');
    res.contentType = 'json';
    res.send({msg: 'Hello Heroku ' + ENVIRONMENT + '!'})
    return next();
};

routerInstance.get('/', handle);

module.exports = routerInstance;
