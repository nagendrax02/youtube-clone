const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
     text: {
          type: String,
          minlength: [3, 'Must be three characters long'],
          required: [true, 'Text is required']
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
     toJSON: {virtuals: true},
     toObject: {virtuals: true},
     timestamps: true,
     versionKey: false
});

module.exports = mongoose.model('comment', CommentSchema);
