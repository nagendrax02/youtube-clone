const asyncHandler = require("../middleware/asyncHandler.old.middleware");
const ErrorResponse = require("../utils/errorResponse.util");
const advancedResultsFunc = require("../utils/advancedResultsFunc.util");

const Video = require("../models/video.model");
const Feeling = require("../models/likeDislike.model");

exports.createFeeling = asyncHandler(async (req, res, next) => {
  req.body.userId = req.user._id;
  const {type, userId, videoId} = req.body;

  const video = await Video.findById(videoId);
  if (!video) {
    return next(new ErrorResponse(`No video with video id of ${videoId}`));
  }

  if (video.status !== "public") {
    return next(
      new ErrorResponse(
        `You can't like/dislike this video until it's made public`
      )
    );
  }

  let feeling = await Feeling.findOne({
    videoId,
    userId,
  });

  if (!feeling) {
    feeling = await Feeling.create({
      type,
      videoId,
      userId,
    });
    return res.status(200).json({success: true, data: feeling});
  }

  if (type == feeling.type) {
    await feeling.remove();
    return res.status(200).json({success: true, data: {}});
  }

  feeling.type = type;
  feeling = await feeling.save();

  res.status(200).json({success: true, data: feeling});
});

exports.checkFeeling = asyncHandler(async (req, res, next) => {
  const feeling = await Feeling.findOne({
    videoId: req.body.videoId,
    userId: req.user._id,
  });

  if (!feeling) {
    return res.status(200).json({success: true, data: {feeling: ""}});
  }

  return res
    .status(200)
    .json({success: true, data: {feeling: feeling}});
});

exports.getLikedVideos = asyncHandler(async (req, res, next) => {
  const likes = await Feeling.find({
    userId: req.user._id,
    type: "like",
  });

  if (likes.length === 0)
    return res.status(200).json({success: true, data: {}});

  const videosId = likes.map((video) => {
    return {
      _id: video.videoId.toString(),
    };
  });

  const populates = [{path: "userId", select: "photoUrl channelName"}];
  advancedResultsFunc(req, res, Video, populates, "public", videosId);
});
