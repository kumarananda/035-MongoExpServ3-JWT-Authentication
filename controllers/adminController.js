const bcrypt = require('bcryptjs/dist/bcrypt')
const Admin = require('../models/adminModle')


const getAllAdmin = async (req, res) => {
    let data = await Admin.find()
    res.status(200).json(data)
}

const getSingleAdmin = async (req, res) => {
    let singleAdmin = await Admin.findById(req.params.id)
    res.status(200).json(singleAdmin)
}

const createAdmin = async (req, res) => {

    const {name, cell, email, skill, username, location, password } = req.body;

    // hash password
    
    console.log(password);
    
    if (!name || !cell || !email || !username || !password){
        
        res.status(400).json({
            message : `All fileds are required` 
        })
    }else {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
         
        let data = await Admin.create({
            ...req.body,
            password : hashPassword
    
        });
        res.status(200).json({
            message : `Create admin is Done`
        })
    }

    
    
}

const updateSingleAdmin = async (req, res) => {

    console.log(req.params.id);
    await Admin.findByIdAndUpdate(req.params.id, req.body, { new : true });
    res.status(200).json({
        message : `Update Single admin is Done`
    })
}

const deleteSingleAdmin = async (req, res) => {

    const delete_data = await Admin.findById(req.params.id);

    if(!delete_data){
        res.status(400).json({
            message : `Admin is not found`
        })
    }else{
        const trush_data = await Admin.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message : `Delete ${trush_data.name} data is Done`
        })
    }

}

module.exports = {
    getAllAdmin,
    getSingleAdmin,
    createAdmin,
    updateSingleAdmin,
    deleteSingleAdmin
}