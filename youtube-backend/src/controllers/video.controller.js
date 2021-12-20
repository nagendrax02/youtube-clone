const videoModel = require("../models/video.model")
const fs = require("fs")
class videoController{
    async upload(req,res){
        console.log(req.filename)
        const newVideo = new videoModel({
            owner:req.token._id,
            name:req.body.name,
            videopath:req.filename
        })
        try{
            const saveVideo = await newVideo.save();
            return res.status(201).json({msg:"video uploaded successfully"});
        }catch(err){
            return res.status(500).json({msg:err.message});
        }
        // console.log("filename", req.filename);
        // console.log("video name", req.body.name);
        // console.log("token", req.token)
        // return res.status(200).json({msg:"Authenticated"});
    }

    //streaming video
    stream(req,res){
        const range = req.headers.range;

        if(!range){
            return res.status(400).json({msg:"range header is required to start stream"});
        }
        const videoPath = `src/videos/${req.params.filename}`;
        const videoSize = fs.statSync(videoPath).size;

        const start = Number(range.replace(/\D/g,""));
        const chunk_size  = 10 **6 // 1mb;
        const end = Math.min(start + chunk_size, videoSize-1);
        const contentLength = end - start +1;
        const headers  = {
            'Conte-Length':contentLength,
            'Accept-Range': 'bytes',
            'Content-Type': 'video/mp4',
            'Content-Range':`bytes ${start}-${end}/${videoSize}`
        }
        res.writeHead(206, headers);
        const videoStream = fs.createReadStream(videoPath, {start, end});
        videoStream.pipe(res);
    }
}

module.exports = videoController;