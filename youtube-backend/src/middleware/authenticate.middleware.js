// require("dotenv").config();

// const jwt = require("jsonwebtoken");


// const SECRET = process.env.SECRET;

// function authenticate (req, res, next) {
//      const bearerToken = req?.headers?.authorization;
//      if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
//           return res.send("bearer token error");
//      }
//      const token = bearerToken.split(" ")[1];
//      try {
//           const user = verifyToken(token);
//           req.user = user.user;
//           return next();
//      } catch (err) {
//           if (!user) {
//                return res.send("bearer token error");
//           }
//      }
// }

// function verifyToken (token) {
//      return new Promise((resolve, reject) => {
//           jwt.verify(token, SECRET, function(err, decoded) {
//                if (err) return reject(err);
//                return resolve(decoded);
//           });
//      });
// }


// module.exports = authenticate;
// const {response, request} = require("express");
// const verify = require("jsonwebtoken");

// require("dotenv").config();

// module.exports.Authenticate = (req, res, next) => {
//      const token = req.headers['x-auth-token'];
//      verify(token, process.env.cookie_secret, (error, decoded) => {
//           if (error) {
//                return res.status(400).send(400).json({msg: "signup or login to upload video"});
//           }
//           request.token = decoded;
//           next();
//      });
// };
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