const mongoose = require('mongoose');

const replySchema = new mongoose.Schema(
     {
          text: {
               type: String,
               minlength: [3, 'Must be three characters long'],
               required: [true, 'Text is required']
          },
          commentId: {
               type: mongoose.Schema.ObjectId,
               ref: 'comment',
               required: true
          },
          userId: {
               type: mongoose.Schema.ObjectId,
               ref: 'user',
               required: true
          }
     },
     {
          toJSON: {virtuals: true},
          toObject: {virtuals: true},
          timestamps: true,
          versionKey: false
     }
);
replySchema.pre('find', function() {
     this.populate({
          path: 'userId',
          select: 'channelName photoUrl',
          sort: '+createdAt'
     });
});

module.exports = mongoose.model('reply', replySchema);