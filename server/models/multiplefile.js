const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const multipleFileSchema = new Scheme({
    telegram_username: {
        type: String,
        required: false,
    },
    telegram_id: {
        type: Number,
        required: false,
    },
    condition: {
        type: String,
        required: true,
    },
    make:{
        type:String,
        required: true,
    },
    model:{
        type: String,
        required: true,
    },
    year:{
        type: Number,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    carplate: {
      type: String,
      required: false,
    },
    fuel: {
      type: String,
      required: true
    },
    engine: {
        type: String,
        required: function() {
            //return
            return this.fuel !== 'Electric';
        },
    },
    transmission: {
       type: String,
       required: true
    },
    milage:{
        type: String,
        required: false,
    },
    color: {
      type: String,
      required: true,
    },
    files: [Object],
    checked: {
        type: Boolean,
        required: false,
    }
},{timestamps: true});

module.exports = mongoose.model('MultipleFile', multipleFileSchema);