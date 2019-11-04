const mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {
    name: { type: String },
    surname: { type: String },
    number: { type: String },
    birthday: { type: Date },
    address: { type: String}

});

module.exports = { Contact };