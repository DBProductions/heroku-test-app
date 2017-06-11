'use strict';
var server = require('./lib/server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('%s listening at %s', server.name, server.url);
});
