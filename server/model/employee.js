const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstName : {
        type : String,
        required: true
    },
    age : {
        type: Number,
        required: true
    }
})

const Empdb = mongoose.model('empData', schema);

module.exports = Empdb;