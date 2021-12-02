// require("dotenv").config();
// const User = require("../models/user.model");
// const jwt = require("jsonwebtoken");
// const SECRET = process.env.SECRET;


// console.log('SECRET:', SECRET);


// const newToken = (user) => {
//      try {
//           return jwt.sign({user: user}, SECRET);//to be replaced by env var}.
//      } catch (err) {
//           console.log(err.message);
//      }
// };



// async function register (req, res) {
//      try {
//           let user = await User.findOne({email: req.body.email}).lean().exec();

//           if (user) return res.send("user already exist");
//           console.log(req.body);
//           user = await User.create({

//           });

//           const token = newToken(user);

//           res.send({token});

//      } catch (err) {
//           console.log(err);
//      }
// }

// async function login (req, res) {
//      let user = await User.findOne({email: req.body.email}).exec();
//      if (!user) {
//           return res.send("user not found !");
//      }
//      console.log('user:', user);
//      const match = user.matchPassword(req.body.password);
//      console.log("match :", match);
//      if (!match) {
//           return res.send("wrong password");
//      }
//      const token = newToken(user);
//      return res.send({user, token});
// }

// module.exports = {register, login};