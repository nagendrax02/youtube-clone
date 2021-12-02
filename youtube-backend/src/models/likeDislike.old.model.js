const mongoose = require("mongoose");

const likeDislikeSchema = new mongoose.Schema({
     type: {
          type: String,
          enum: ['like', 'dislike'],
          required: true
     },
     videoId: {
          type: mongoose.Schema.ObjectId,
          ref: 'video',
          required: true
     },
     userId: {
          type: mongoose.Schema.ObjectId,
          ref: 'user',
          required: true
     }
}, {
     timestamps: true,
});

module.exports = mongoose.model("likeDislike", likeDislikeSchema);