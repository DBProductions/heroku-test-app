const mongoose = require('mongoose');
const models = require('./models')(mongoose);

const ENVIRONMENT = process.env.NODE_ENV || 'local';

module.exports = (fastify) => {
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
<<<<<<< HEAD
        preHandler: (request, reply, done) => {
=======
        beforeHandler: (request, reply, done) => {
>>>>>>> 7bb87d303fbc1e2b6eb80ac28552327d95f7cd63
            console.log('Request:', Date.now(), request.id);
            done();
        },
        handler: (request, reply) => {
            let userIns = new models({name: 'Tester', email: `${Date.now()}@test.com`});
            userIns.save().then(() => console.log('done'));
    
            reply.send({response: 'Hello Heroku ' + ENVIRONMENT + '!'});
        },
    });  
};
