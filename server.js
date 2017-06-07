const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.NODE_ENV;

app.get('/', (req, res) => {
    res.send('Hello Heroku ' + ENVIRONMENT + '!')
})

app.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT + '!')
})
