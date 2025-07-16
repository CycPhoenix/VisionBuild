const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const sequalize = require('./db/db');
const Item = require('./models/itemModel');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes); // Ensure itemRoutes is properly imported and exported

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to VisionBuild API!')
});

// Sync database
sequalize.sync({force: false}).then(() => {
    console.log('Database synced!');
});

module.exports = app;
