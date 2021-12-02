const path = require("path");
const fs = require("fs");
const asyncHandler = require("../middleware/asyncHandler.middleware");
const ErrorResponse = require("../utils/errorResponse.util");

const Video = require("../models/video.model");

//desc GET public / private videos
//route GET /videos/private or /videos/public
//access public or private
module.exports.getVideos = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advanceResults);
});

//desc GET single video
//route /videos/:id
//access public

module.exports.getVideo = asyncHandler(async (req, res, next) => {
    const video = await Video.findById(req.params.id)
        .populate({path: 'userID', select: 'channelName subscribers photoUrl'})
        .populate({path: 'likes'})
        .populate({path: 'dislikes'})
        .populate({path: 'comments'});
    if (!video) {
        return next(new ErrorResponse(`No vieo found with id ${req.params.id}`));
    }
    res.status(200).json({success: true, data: video});
});


//desc upload vide
//POST /video
//private

module.exports.uploadVideo = asyncHandler(async (req, res, next) => {
    let videoModel = await Video.create({userID: req.user._id});
    if (!req.files) {
        return next(new ErrorResponse(`please upload a video`, 404));
    }
    const video = req.files.video;

    if (!video.mimetype.startsWith('video')) {
        await videoModel.remove();
        return next(new ErrorResponse(`please upload a video `, 404));
    }
    if (video.size > 1000 * 5) {
        await videoModel.remove();
        return next(new ErrorResponse(`Please upload a video less than${(1000 * 5) / 1000 / 1000} mb`, 404));
    }
    video.orginalName = video.name.split('.')[0];
    video.name = `video-${videoModel._id}${path.parse(video.name).ext}`;

    video.mv(
        `/upload/videos/${video.name}`,
        async (err) => {
            if (err) {
                await videoModel.remove();
                console.error(err);
                return next(new ErrorResponse(`problem with video upload`, 500));
            }
            videoModel = await Video.findByIdAndUpdate(
                videoModel._id,
                {
                    url: video.name,
                    title: video.orginalName
                },
                {new: true, runValidators: true}
            );
            res.status(200).json({success: true, data: videoModel});
        }
    );
});

//desc update video
//route PUT /videos/:id
//access privarte

module.exports.updateVideo = asyncHandler(async (req, res, next) => {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
});