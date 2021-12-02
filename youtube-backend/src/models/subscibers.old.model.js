const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema(
     {
          subscriberId: {
               type: mongoose.Schema.ObjectId,
               ref: 'user',
               required: true
          },
          channelId: {
               type: mongoose.Schema.ObjectId,
               ref: 'user',
               required: true
          }
     },
     {
          timestamps: true,
          versionKey: false
     }
);

module.exports = mongoose.model('subscription', subscriptionSchema);