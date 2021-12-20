const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        required:[true, "video name is required to upload video"]
    },
    videopath:{
        type:String,
        required:[true, "video path is required to upload"],
        unique:[true, "Video path already exist"],
    },
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0
    },
    views:{
        type:Array,
        default:[]
    },
    comment:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model("video", videoSchema)