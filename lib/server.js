const fastify = require('fastify')();
const mongoose = require('mongoose');

const MONGODB = process.env.MONGODB || 'mongodb://localhost:27017/heroku';
const ENVIRONMENT = process.env.NODE_ENV || 'local';

mongoose.connect(MONGODB, {useNewUrlParser: true});

const Cat = mongoose.model('Cat', {name: String});

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
        const kitty = new Cat({name: 'Zildjian'});
        kitty.save().then(() => console.log('meow'));
        reply.send({response: 'Hello Heroku ' + ENVIRONMENT + '!'});
    },
});

module.exports = fastify;