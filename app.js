const express = require('express');
const app = express();
const port = process.env.PORT || 3020;
const package = require('./package.json');


app.get('/', (req, res) => res.send('Hello, there\'s nothing to see here, maybe try a GET request to /ip instead?'));

app.get('/ip', (req, res) => {
    console.log(req);
    res.json({
        columns: [{
            name: "ip",
            type: "string",
            friendly_name: "IP"
        }],
        rows: [{
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        }]
    })
});

app.listen(port, () => console.log(`${package.name} v${package.version} listening on port ${port}`));