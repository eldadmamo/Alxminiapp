const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const multipleSocial = new Scheme({
    youtube: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('socialPage', multipleSocial);
