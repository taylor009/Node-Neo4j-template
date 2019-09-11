'use strict';
const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const path       = require('path');
const logger     = require('./config/logger');


// const neode      = require('neode').fromEnv().withDirectory(path.join(__dirname, 'models'));

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



module.exports = app;
