var hippie = require('hippie');
var server = require('../lib/server');

describe('Server', () => {
    describe('/ endpoint', () => {
        it('returns the basic data', (done) => {
            hippie(server)
            .json()
            .get('/')
            .expectStatus(200)
            .end((err, res, body) => {
                if (err) throw err;
                done();
            });
        });
    });
    describe('/wrong endpoint', () => {
        it('returns the expected error', (done) => {
            hippie(server)
            .json()
            .get('/wrong')
            .expectStatus(404)
            .end((err, res, body) => {
                if (err) throw err;
                done();
            });
        });
    });
});
