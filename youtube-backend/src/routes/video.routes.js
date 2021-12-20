const express = require("express");
const Authenticate = require("../middlewares/authenticate.middleware")
const {videUpload} = require("../middlewares/video.middleware")

const videoController = require("../controllers/video.controller")
const {json}  = require("body-parser");
const videoModel = require("../models/video.model");

const router = express.Router();
const Controller = new videoController(); 
router.post("/api/video",Authenticate,videUpload.single("video"), (req,res)=>{
    Controller.upload(req,res);
})

router.get("/api/video/:filename", (req,res)=>{
    Controller.stream(req,res);
})

router.get("/api/video", async(req,res)=>{
    try{
        const videos = await videoModel.find().lean().exec();
        return res.status(200).json({success:true, videos, length: videos.length});
    }catch(err){
        return res.status(201).json({success:false, error:err.message})
    }
})

router.get("/api/video/:id", async(req,res)=>{
    try{
        const video = await videoModel.findOne({_id:req.params.id}).lean().exec();
    
        return res.status(200).json({success:true, video, length: videos.length})
    }catch(err){
        return res.status(201).json({success:false, error:err.message});
    }
})

module.exports = router;