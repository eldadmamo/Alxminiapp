const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const singleFileSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('SignUp', singleFileSchema);