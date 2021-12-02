const express = require("express");
const multer = require("multer");
const router = express.Router();
const storage = multer.diskStorage({
  destination:(req,res,cb)=>{
    cb(null,'videos')
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname.replace(/ /g, '_'));
  }
})

const uploadVideo = multer({
  storage: storage,
  limits:{
    fileSize:1024 * 1024 *50 // 50mb
  }
});

router.post('/', uploadVideo.single("file"), (req,res,next)=>{
  res.status(200).json({msg:"video uplaoded successfully"})
})
 
module.exports = router;
