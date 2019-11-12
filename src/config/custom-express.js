require('marko/node-require').install();
require('marko/express');

const express = require('express');
/*
const session = require('express-session');
const express_mysql_session = require('express-mysql-session');
const MySQLStore = express_mysql_session(session);
*/

const app = express();

/*
var opcoes = {host: 'localhost', port:3306, user:'root', password:'', database:'turma5'};
var sessionStore  = new MySQLStore(opcoes);
*/

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const templates = require('../app/views/templates');

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

const sessionAuth = require('./session-auth');
sessionAuth(app);

/*
// configurando sessao de usuario
app.use(session(
    {
        secret: 'odesempre',
        saveUninitialized: true,
        resave: true,
        store: sessionStore
    }
));
*/

const rotas = require('../app/routes');
rotas(app);

module.exports = app;