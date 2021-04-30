const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: false
    },
    
})

const Userdb = mongoose.model('', schema);

module.exports = Userdb;