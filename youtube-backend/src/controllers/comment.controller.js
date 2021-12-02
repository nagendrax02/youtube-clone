const asyncHandler = require('../middleware/asyncHandler.old.middleware');
const ErrorResponse = require('../utils/errorResponse.util');
const Comment = require('../models/comment.model');
const Video = require('../models/video.model');



exports.getComments = asyncHandler(async (req, res, next) => {
     res.status(200).json(res.advancedResults);
});

exports.getCommentByVideoId = asyncHandler(async (req, res, next) => {
     const comments = await Comment.find({videoId: req.params.videoId})
          .populate('userId')
          .sort('-createdAt');
     if (!comments) {
          return next(new ErrorResponse(`No comments`));
     }
     return res.status(200).json({sucess: true, data: comments});
});


exports.createComment = asyncHandler(async (req, res, next) => {
     console.log(req.body.videoId);
     let video = await Video.findOne({
          _id: req.body.videoId
     });

     if (!video) {
          return next(
               new ErrorResponse(`No video !!`)
          );
     }

     const comment = await Comment.create({
          ...req.body,
          userId: req.user._id
     });

     return res.status(200).json({sucess: true, data: comment});
});

exports.deleteComment = asyncHandler(async (req, res, next) => {
     let comment = await Comment.findById(req.params.id).populate('videoId');

     if (!comment) {
          return next(
               new ErrorResponse(`No comment !`)
          );
     }

     if (
          comment.userId.toString() == req.user._id.toString() ||
          comment.videoId.userId.toString() == req.user._id.toString()
     ) {
          await comment.remove();
     } else {
          return next(
               new ErrorResponse(`You are not authorized to delete this comment`)
          );
     }
     return res.status(200).json({success: true, comment});
});