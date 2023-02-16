const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const router = express.Router();

router.get('/api/nylas-webhooks', (req, res) => {
    console.log('query >>>>>>', req.query);

    return res.send(req.query.challenge);
});

router.post('/api/nylas-webhooks', (req, res) => {

    req.body.deltas.map(deltas => console.log('deltas >>>', JSON.stringify(deltas)));

    return res.status(200).end();
});

router.get('/', (req, res) => {
    res.send('App success');
});

app.use('/', router);

app.listen(process.env.PORT || 3001, '0.0.0.0', () => console.log('app started'));