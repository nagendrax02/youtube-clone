const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

const Controller = new authController();

router.post("/api/signup", (req,res)=>{
    Controller.signUp(req,res)
})

router.post("/api/signin", (req,res)=>{
    Controller.signin(req,res);
})
router.post("/api/password-reset", (req,res)=>{
    Controller.forgotPassword(req,res);
})

module.exports = router;