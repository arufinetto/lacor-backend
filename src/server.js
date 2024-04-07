const express = require("express");
const app = express();
//var cors = require("cors");
var bodyParser = require('body-parser');
//var expressValidator = require('express-validator');
const config = require('./config/config');
// Define your routes here
const routes = require('./routes/routes');
const db = require('./config/db');

//app.use(cors());
app.use(bodyParser.json());
//app.use(expressValidator());

app.use('/api', routes);

db.connect();

app.listen(config.port, () => {
    console.log("Server is listening on port " + config.port);
 })
