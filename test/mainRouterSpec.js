var hippie = require('hippie');
var server = require('../lib/server');

describe('mainRouter', () => {
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
});
