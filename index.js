const server = require('./lib/server');
const PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Listening at %s', PORT);
});
