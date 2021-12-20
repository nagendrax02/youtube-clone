const {verify} = require("jsonwebtoken");

require("dotenv").config();

const Authenticate  = (req,res,next)=>{
    const token = req.headers['x-auth-token'];

    verify(token, process.env.COOKIE_KEY, (error, decoded)=>{
        if(error){
            return res.status(400).json({msg:"sign up or login to upload video"});
        }
        req.token = decoded;
        next();
    })
}
module.exports = Authenticate;