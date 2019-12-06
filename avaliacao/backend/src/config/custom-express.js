const express = require('express');
const app = express();

app.set('secret', 'curso-javascript-educorp');

// CORS
const cors = require('cors');
const corsOptions = {
    exposedHeaders: ['x-access-token']
};
app.use(cors(corsOptions));

// JSON body parsing
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// ROTAS
const rotas = require('../app/routes');
rotas(app);

app.use('*', (req, resp) => {
    resp.status(404).json({ mensagem: `rota ${req.originalUrl} inexistente!` });
});

app.use((err, req, resp, next) => {
    console.error(err.stack);
    resp.status(500).json({ mensagem: 'Erro Interno no servidor' });
});

module.exports = app;