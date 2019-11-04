const express = require('express');
const app = express();

require('marko/node-require').install();
require('marko/express');

const bodyParser = require('body-parser');

// Allow JSON body parsing
app.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/routes/cliente-routes');
rotas(app);

module.exports = app;