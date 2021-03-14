const mongoose = require('mongoose');

var Subjct = mongoose.model('Employee', {
    subject: { type: String },
    chapters:{type:Array}
});

module.exports = { Subjct };