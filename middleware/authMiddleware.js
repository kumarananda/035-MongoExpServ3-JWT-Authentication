const jwt = require('jsonwebtoken')

const authcheck = (req, res, next)=> {
    // console.log(req.headers.authorization.split(' ')[1]);

    

    if(req.headers.authorization){
        
        //get token from requist
        const token = req.headers.authorization.split(' ')[1];

        // verify token
        console.log(jwt.verify(token, process.env.JWT_SECRET));
        const token_verify = jwt.verify(token, process.env.JWT_SECRET) 
        if(token_verify){
            next();
        }else {
            res.status(400).json({
                message : 'invalid token'
            })
        }
           
    }else {
        res.status(400).json({
            message : 'Token is found'
        })
    }
    
}
module.exports = {
    authcheck
}