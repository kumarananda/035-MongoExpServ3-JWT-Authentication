const mongoose = require('mongoose')


const adminModle = mongoose.Schema({
    name : {
        type : String,
        require : [true, "Name field is required"]
    },
    email : {
        type : String,
        required : [true, "Email field is required"],
        unique : true

    },
    cell : {
        type : String,
        required : [true, "Cell field is required"],
        unique : true
        // match : /^kk$/
        
        
    },
    username : {
        type : String,
        required : [true, "username field is required"],
        unique : true,
        Lowercase : true,
        maxLength : 10,
        minLength : 5 
    },
    location : {
        type : String,
        default : "Dhaka",
        required : false

    },
    skill : {
        type : String,
        requird : false
    },
    password : {
        type : String,
        required : true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("Admins", adminModle)

