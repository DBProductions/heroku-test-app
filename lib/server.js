const fastify = require('fastify')();
const mongoose = require('mongoose');
require('./routes')(fastify);

const MONGODB = process.env.MONGODB || 'mongodb://localhost:27017/heroku';

// use native promises
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB, {useNewUrlParser: true}).catch((err) => { console.log(err); });

module.exports = fastify;