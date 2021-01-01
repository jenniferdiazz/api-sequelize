const express = require('express');
const consign = require ('consign');

const app = express();

// Routes
consign({cwd: __dirname})
  .then('db.js')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  //.then('routes')
  .into(app);