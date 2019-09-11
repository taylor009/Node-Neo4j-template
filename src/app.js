'use strict';
const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const logger     = require('./config/logger');

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



module.exports = app;
