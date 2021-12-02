// const express = require("express");

// const router = express.Router();


// const User = require("../models/user.model");
// const uplaod = require("../utils/uploader");

// router.get("/", async function(req, res) {
//      try {
//           const users = await User.find().lean().exec();
//           return res.send(users);
//      } catch (err) {
//           return res.send(err.message);
//      }
// });

// router.post("/register", uplaod.any("photo_url"), async function(req, res) {
//      try {
//           const user = await User.create({
//                ...req.body,
//                photoUrl: req.files[0].path
//           });
//           const token = user.getSignedJwtToken();
//           console.log('token:', token);
//           return res.status(200).json({user, token});
//      } catch (err) {
//           res.send(err.message);
//      }
// });

// router.post("/login", async function(req, res) {
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
// });

// async function register (req, res) {
//      // if user already there then we will throw error
//      try {
//           let user = await User.findOne({email: req.body.email}).lean().exec();

//           if (user) return res.send("user already exist");

//           user = await User.create(req.body);

//           const token = newToken(user);

//           res.send({user, token});
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


// router.get("/:id", async function(req, res) {
//      try {
//           const user = await findById(req.params.id).populate({
//                path: 'subscribers'
//           });
//           if (!user) {return res.send("no user found !");}
//           return res.send(user);
//      } catch (err) {
//           return res.send(err.message);
//      }
// });

// router.patch("/:id", async function(req, res) {
//      try {
//           const user = await User.findByIdAndUpdate(req.params.id, req.body);

//           if (!user) {return res.send("no user found !");}

//           return res.send(user);

//      } catch (err) {
//           return res.send(err.message);
//      }
// });


// module.exports = router;
