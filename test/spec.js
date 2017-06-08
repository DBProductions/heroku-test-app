var hippie = require('hippie');
var server = require('../lib/server');

describe('Server', function () {
  describe('/ endpoint', function () {
    it('returns a user based on the id', function (done) {
      hippie(server)
        .json()
        .get('/')
        .expectStatus(200)
        .end(function(err, res, body) {
          if (err) throw err;
          done();
        });
    });
  });
  describe('/wrong endpoint', function () {
    it('returns a user based on the id', function (done) {
      hippie(server)
        .json()
        .get('/wrong')
        .expectStatus(404)
        .end(function(err, res, body) {
          if (err) throw err;
          done();
        });
    });
  });
});
