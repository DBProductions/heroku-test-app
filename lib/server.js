const fastify = require('fastify')();

const ENVIRONMENT = process.env.NODE_ENV || 'local';

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
        reply.send({response: 'Hello Heroku ' + ENVIRONMENT + '!'});
    },
});

module.exports = fastify;