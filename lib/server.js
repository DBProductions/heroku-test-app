const fastify = require('fastify')();
const mongoose = require('mongoose');
const models = require('./models')(mongoose);

const MONGODB = process.env.MONGODB || 'mongodb://localhost:27017/heroku';
const ENVIRONMENT = process.env.NODE_ENV || 'local';

// use native promises
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB, {useNewUrlParser: true});

fastify.route({
    method: 'GET',
    url: '/',
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    response: {
                        type: 'string',
                    },
                },
            },
        },
    },
    beforeHandler: (request, reply, done) => {
        console.log('Request:', Date.now(), request.id);
        done();
    },
    handler: (request, reply) => {
        let userIns = new models({name: 'Tester', email: `${Date.now()}@test.com`});
        userIns.save().then(() => console.log('done'));

        reply.send({response: 'Hello Heroku ' + ENVIRONMENT + '!'});
    },
});

module.exports = fastify;