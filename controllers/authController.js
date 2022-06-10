const Admins = require("../models/adminModle");
const bcrypt = require('bcryptjs')


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
            res.status(200).json({ 
                message : "Admin user login successfully"
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
