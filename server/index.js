const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

mongoose.connect('mongodb://localhost/store');

app.use('/', require('./routes/store'));
app.use('/admin', require('./routes/user'));

app.listen(8000);
