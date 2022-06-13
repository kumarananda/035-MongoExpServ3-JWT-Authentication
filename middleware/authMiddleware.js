const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModle')



const authcheck = async (req, res, next)=> {
    // console.log(req.headers.authorization.split(' ')[1]);

    

    if(req.headers.authorization){
        
        try{
            //get token from requist
            const token = req.headers.authorization.split(' ')[1];

            // verify token
            // console.log(jwt.verify(token, process.env.JWT_SECRET));
            const {id} = jwt.verify(token, process.env.JWT_SECRET);

            // const login_user_data = await Admin.findById(id);
            // console.log(login_user_data);

            req.user = await Admin.findById(id);

            
        
            next();
        
        }catch(err){
            res.status(400).json(err)
        }

           
    }else {
        res.status(400).json({
            message : 'Token is not found'
        })
    }
    
}

module.exports = {
    authcheck
}