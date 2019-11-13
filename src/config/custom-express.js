require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Marko templates
const templates = require('../app/views/templates');

app.use('/estatico', express.static('src/app/public'));

// Allow JSON body parsing
app.use(bodyParser.urlencoded({
    extended: true
}));

// Allow HTML method override
app.use(methodOverride((req, resp) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

// CORS workaround
app.use((req, resp, next) => {
    resp.header('Access-Control-Allow-Origin', '*');
    resp.header('Access-Control-Allow-Origin', 'http://localhost');
    resp.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    resp.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Session Authentication and Authorization
const sessionAuth = require('./session-auth');
sessionAuth(app);

// Routes
const rotas = require('../app/routes');
rotas(app);

// Page not found fallback
app.use((req, resp, next) => {
    return resp.status(404).marko(
        templates.base.erro404
    );
});

// Unexpected Error fallback
app.use((err, req, resp, next) => {
    console.log(err);
    return resp.status(500).marko(
        templates.base.erro500
    );
});

module.exports = app;