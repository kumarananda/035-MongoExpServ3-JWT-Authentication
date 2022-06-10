const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const colors = require('colors');
const { authcheck } = require('./middleware/authMiddleware.js');
const connectMongoDB = require('./config/db');


// mongoDB init
connectMongoDB();

//enveronment variables
const PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000  ;

// Requast Body init
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// use middleware  >> call globelly
// app.use(authcheck)
// middleware call under a single path localhost:5050/newpath
// app.get('/admin', authcheck, (req, res, next) => {
//     console.log('newpath path is done');
//     next() 
// })

// student Route use
app.use('/api/students', require('./routes/student.js'));
app.use('/api/admin', require('./routes/admin.js'));

// add express server lestener with Port 5050
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen);
})
// console.log(PORT);     