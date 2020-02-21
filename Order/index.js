const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();

//Import Routes
const order = require('./routes/order');

//Middleware
app.use(bodyParser.json());
app.use('/order', order);

app.get('/', (req, res) => {
  res.send('Welcome Back!');
});

//connect to the DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('Connected to Mongo Atlas'));

// Server will run on this port
app.listen(2222);