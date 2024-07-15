const express = require('express');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referralRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/referrals', referralRoutes);

module.exports = app;