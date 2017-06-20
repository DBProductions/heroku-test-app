var hippie = require('hippie');
var server = require('../lib/server');

describe('Server errors', () => {
    describe('/wrong GET', () => {
        it('returns the expected error', (done) => {
            hippie(server)
            .json()
            .get('/wrong')
            .expectStatus(404)
            .expectBody({
                code: 'ResourceNotFound',
                message: '/wrong does not exist'
            })
            .end((err, res, body) => {
                if (err) throw err;
                done();
            });
        });
    });
    describe('/wrong POST', () => {
        it('returns the expected error', (done) => {
            hippie(server)
            .json()
            .post('/wrong')
            .send({ name: 'Test' })
            .expectStatus(404)
            .expectBody({
                code: 'ResourceNotFound',
                message: '/wrong does not exist'
            })
            .end((err, res, body) => {
                if (err) throw err;
                done();
            });
        });
    });
});
