const mongoose = require('mongoose');
require('dotenv').config()

//Set up default mongoose connection
const mongoUrl = `mongodb://${proccess.env.DB_USER}:${proccess.env.DB_PWD}@${proccess.env.DB_HOST}:${proccess.env.DB_PORT}/${proccess.env.DB_NAME}`;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// we're connected!
db.once('open', function () {
    console.log('db connected');
});