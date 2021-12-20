const formidable = require("formidable");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model")

require("dotenv").config();
const jsonWebToken = require("jsonwebtoken");

class AuthController{
    // sign up method
    signUp(req,res){
        const form = new formidable.IncomingForm();
        form.parse(req, async (error, fields, files)=>{
            if(error){
                return res.status(500).json({
                    msg:"Netwrok Error failed to create account, please try again later"
                })
            }
            const {username,email,password,} = fields;
            const salt = await bcrypt.genSalt(15)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newAccount = new userModel({
                username,
                email,
                password: hashedPassword
            })
            try{
                const savedAccount = await newAccount.save();
                return res.status(201).json({msg:"account created successfully"})
            }catch(err){
                return res.status(500).json({msg:"failed to create account"});
            }
        })
    }
    //signin method
    signin(req,res){
        const form = new formidable.IncomingForm();
        form.parse(req, async (error, fields, files)=>{
            if(error){
                return res.status(500).json({msg:"Network error failed to log in"});
            }
            const {email ,password} = fields;
            const isAccountEmail = email.includes('@');
            if(isAccountEmail){
                const user = await userModel.findOne({email:email});
                if(!user){
                    return res.status(404).json({msg:"account with this email does not exist"});
                }
                const isPasswordValid = await bcrypt.compare(password, user.password)
                if(!isPasswordValid){
                    return res.status(400).json({msg:"password invalid"})
                }
                const tokenPayload = {
                    _id:user._id,
                    email:user.email,
                    username:user.username
                }
                const token = jsonWebToken.sign(tokenPayload,process.env.COOKIE_KEY, {expiresIn:'365d'} )
                return res.status(200).json({token,tokenPayload})
            } 

            const user = await userModel.findOne({username:email});
            if(!user){
                return res.status(404).json({msg:"account with this username does not exist"});
            }
            const isPasswordValid = await bcrypt.compare(password, user.password)
            if(!isPasswordValid){
                return res.status(400).json({msg:"password invalid"})
            }
            const tokenPayload = {
                _id:user._id,
                email:user.email,
                username:user.username
            }
            const token = jsonWebToken.sign(tokenPayload,process.env.COOKIE_KEY, {expiresIn:'365d'} )
            return res.status(200).json({token})
        })
    }
    //forgot password
    forgotPassword(req,res){
        const form = new formidable.IncomingForm
        form.parse(req, async (error, fields, files)=>{
            if(error){
                return res.status(500).json({msg:"Network error failed to reset password"});
            }
            const {email, password} = fields;

            if(!email || !password){
                return res.status(400).json({msg:"all fileds are required to reset password"})
            }
            const salt = await bcrypt.genSalt(15); 
            const hashedPassword = await bcrypt.hash(password, salt)
            try{
                const user = await userModel.findOne({email:email});
                if(!user){
                    return res.status(404).json({msg:"user with this email does not exist"});
                }
                const updatedAccount = await userModel.findOneAndUpdate({email:email}, {$set:{password:hashedPassword}}, {new:true});
                return res.status(200).json({msg:"password reset successfully"})
                // const updatedAccount = await userModel.findByIdAndUpdate({email:email}, {$set:{password:hashedPassword}})
                // return res.status(200).json({msg:"account password reset successfully"})
            }catch(err){
                return res.status(500).json({msg:"Failed to rest password"})
            }
        })       
    }
}
module.exports = AuthController;