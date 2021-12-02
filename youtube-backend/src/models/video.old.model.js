const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
     title: {type: String},
     description: {type: String, default: "..."},
     thumbnail: {type: String, default: "default-thumbnail.jpg"},
     views: {type: Number, default: 0},
     url: {type: String, defaultUrl: "test.com"},
     categoryID: {type: mongoose.Schema.ObjectId, ref: "category"},
     userID: {type: mongoose.Schema.ObjectId, ref: "user"},
}, {
     toJSON: {virtuals: true},
     toObject: {virtuals: true},
     timestamps: true,
     versionKey: false
});


videoSchema.index({title: 'text', description: 'text'});

videoSchema.virtual("dislike", {
     ref: "likeDislike",
     localField: "_id",
     foreignField: "videoId",
     justOne: false,
     count: false,
     match: {type: 'dislike'}
});


videoSchema.virtual("like", {
     ref: "likeDislike",
     localField: "_id",
     foreignField: "videoId",
     justOne: false,
     count: false,
     match: {type: 'like'}
});


videoSchema.virtual('comments', {
     ref: 'comment',
     localField: '_id',
     foreignField: 'videoId',
     justOne: false,
     count: true
});
module.exports = mongoose.model('video', videoSchema);
