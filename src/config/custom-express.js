const express = require('express');
const app = express();

require('marko/node-require').install();
require('marko/express');

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use('/estatico', express.static('src/app/public'));

// Allow JSON body parsing
app.use(bodyParser.urlencoded({
    extended: true
}));

// Allow HTML method override
app.use(methodOverride((req,res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

// CORS workaround
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const rotas = require('../app/routes');
rotas(app);

module.exports = app;