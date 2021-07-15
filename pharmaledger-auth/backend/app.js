// app.js
// Entry point of backend

const express = require('express');
const connectDB = require('./db');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = require('./routes/api/user');

connectDB();

// Cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('test123'));

// Init API routes

app.use('/api/user', users);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
