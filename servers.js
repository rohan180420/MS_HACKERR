const { request } = require('express');
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('HELLO , WORLD!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on a port ${port}...`));