const dotenv = require('dotenv').config();
const mongoose = require('mongoose');



// connection link 
const MONGOLINK = process.env.MONGOLINK

// set mongo db connection
const connectMongoDB = async () => {

    try{

        let connect = await mongoose.connect(MONGOLINK);
        console.log(`mongonDB connection set successfully HOST : ${ connect.connection.host }`.bgGreen .underline);
    }catch(error){
        console.log(`${error}` .bgRed);
    }
} 

// exports connection
module.exports = connectMongoDB;