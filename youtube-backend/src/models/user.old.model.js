// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const uniqueValidator = require('mongoose-unique-validator');

// require("dotenv").config();

// const SECRET = process.env.SECRET;
// console.log('SECRET:', SECRET);

// const userSchema = new mongoose.Schema({
//      channelName: {
//           type: String,
//           required: true,
//           unique: true,
//           uniqueCaseInsensitive: true
//      },
//      email: {
//           type: String,
//           required: true,
//           unique: true,
//           uniqueCaseInsensitive: true
//      },
//      photoUrl: {
//           type: String,
//           default: 'no-photo.jpg'
//      },
//      role: {
//           type: String,
//           enum: ['user', 'admin'],
//           default: 'user'
//      },
//      password: {
//           type: String,
//           required: true,
//           minlength: 6,
//           select: false
//      }
// }, {
//      toJSON: {virtuals: true},
//      toObject: {virtuals: true},
//      timestamps: true
// });

// userSchema.index({channelName: 'text'});

// userSchema.virtual('subscribers', {
//      ref: 'subscription',
//      localField: '_id',
//      foreignField: 'channelId',
//      justOne: false,
//      count: true,
//      match: {userId: this._id}
// });

// userSchema.virtual('videos', {
//      ref: 'video',
//      localField: '_id',
//      foreignField: 'userId',
//      justOne: false,
//      count: true
// });

// userSchema.plugin(uniqueValidator, {message: '{PATH} already exists.'});

// userSchema.pre('find', function() {
//      this.populate({path: 'subscribers'});
// });


// userSchema.pre('save', async function(next) {
//      if (!this.isModified('password')) {
//           next();
//      }
//      const salt = await bcrypt.genSalt(10);
//      this.password = await bcrypt.hash(this.password, salt);
// });

// userSchema.methods.matchPassword = async function(incomingPassword) {
//      return await bcrypt.compare(incomingPassword, this.password);
// };

// userSchema.methods.getSignedJwtToken = function() {
//      return jwt.sign({id: this._id}, SECRET);
// };

// module.exports = mongoose.model('user', userSchema);
