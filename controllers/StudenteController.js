const Students = require('../models/studentModel');

 

// get all students
const getAllStudent = async (req, res ) => {
    
    let data = await Students.find()
    res.status(200).json(data)
    
}

// get single student data
const getSingleStudent = async (req, res ) => {
    let id = req.params.id;
    let singleStudent = await Students.findById(id);
    res.status(400).json(singleStudent)

    
}

// create new student
const createStudent = async (req, res ) => { 

    let data = await Students.create({
        name : req.body.name,
        age : req.body.age,
        skill : req.body.skill,
        location : req.body.location
    }
    );
    res.status(201).json({
        message : 'Data post successfully'
    })

 
}

// update student
const updateStudent = async (req, res ) => {
    let id = req.params.id ;

    await Students.findByIdAndUpdate(id , req.body, {
        new :true
    })
    res.status(201).json({
        message : 'Data update Successfully'
    })
    
        
}
// delete student
const deleteStudent = async (req, res ) => {
    let id = req.params.id ;


    await Students.findByIdAndDelete(id);
    res.status(202).json({
        message : 'Data Delete Successfully'
    })
    
}
module.exports = {
    getAllStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    getSingleStudent
}