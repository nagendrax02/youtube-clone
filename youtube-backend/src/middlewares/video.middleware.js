const multer = require("multer");
const uuid = require("uuid");

const uuidv4 = uuid.v4;

const videoStorage  = multer.diskStorage({
    destination:'src/videos',
    filename:(req, file,cb)=>{
        const id = uuidv4();
        const token = req.token;
        const filename = `${token._id.toString()}-${id}`;
        req.filename = filename;
        cb(null, filename);
    }
})

module.exports.videUpload = multer({
    storage:videoStorage,
    limits:{
        fileSize:9000000 * 5
    },
    fileFilter:(req, file, cb)=>{
        if(!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)){
            return cb(new Error ("video format not supported"))
        }
        cb(undefined,true)
    }
})