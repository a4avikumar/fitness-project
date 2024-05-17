const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user'); // Import user routes
const workoutRoutes = require('./routes/workout'); // Import workout routes
require('dotenv').config();


const app = express();

app.use(bodyParser.json());

// Use the routes
app.use('/api/user', userRoutes);
app.use('/api', workoutRoutes);

const PORT = 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error));
