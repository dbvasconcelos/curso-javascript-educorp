require("marko/node-require").install();
require("marko/express");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// Allow JSON body parsing
app.use(bodyParser.urlencoded({
    extended: true
}));

const routes = require("../app/routes/client-routes");
routes(app);

module.exports = app;