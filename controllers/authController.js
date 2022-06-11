const Admins = require("../models/adminModle");
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken')


// Admin Login System
const adminLogin = async (req, res) => {

    const { email, password} = req.body;

    // check user data
    // const login_data = await Admins.find( {email : email})
    const login_data = await Admins.findOne( {email})
    // console.log(login_data);

    // user data validation
    if(!login_data){
        res.status(200).json({ 
            message : "User email not found"
        })
    }else{
        if(await bcrypt.compare(password, login_data.password)){
            
            // create json web token ( {user_ID }, our_secret , {expiry/validity})
            const token = jwt.sign( {id : login_data._id},  process.env.JWT_SECRET , { expiresIn : "1d" });

            res.status(200).json({
                _id :login_data._id,
                name :login_data.name,
                email :login_data.email,
                cell :login_data.cell,
                token : token
            })
        }else{
            res.status(400).json({ 
                message : "error password"
            })
        }

        
    }

}

module.exports = {
    adminLogin
}
