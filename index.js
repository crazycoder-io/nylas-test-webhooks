const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api/nylas-webhooks', (req, res) => {
    console.log('query >>>>>>', req.query);

    return res.send(req.query.challenge);
});

app.post('/api/nylas-webhooks', (req, res) => {
    console.log('body >>>>>>>', req.body);

    return res.status(200).end();
});

app.listen(3001, () => console.log('app started'));