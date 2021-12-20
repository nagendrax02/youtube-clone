const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String, 
        required:[true, "Usser name is required to create user"],
        unique:[true, "Account with this user name is already exist"]
    },
    email:{
        type:String,
        required:[true, "Email is required to create account"],
        unique: [true, "User already exist with this email"]
    },
    password:{
        type:String,
        required:[true, "password is required to create account "],
        minlength:[6, "password length should be atleast 6 char long"]
    },
    videos:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'videos'
    },
    subscribers:{
        type:Array,
        default:[]
    },
    userSubscribedChannel:{
        type:Array,
        default:[]
    },

})

module.exports = mongoose.model("user", userSchema);