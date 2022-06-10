const mongoose = require('mongoose');

const studentModel = mongoose.Schema({
    name : String,
    age : Number,
    location : String,
    skill : String,
},
{
    timestamps: true
}
) 
 

module.exports = mongoose.model('students', studentModel );