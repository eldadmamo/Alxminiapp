'use strict';

const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        serverSelectionTimeoutMS: 50000, 
        socketTimeoutMS: 45000,
    }).then(() => console.log('Connected to Mongodb ..............'));
}

