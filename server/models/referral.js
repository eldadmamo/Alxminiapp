const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    referrerId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Referral', referralSchema);