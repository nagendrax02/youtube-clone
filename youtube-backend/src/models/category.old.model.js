const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const categorySchema = new mongoose.Schema({
    title: {
        type: String, minlength: [3, "Title must be 3 char long"],
        trim: true,
        unique: true,
        uniqueCaseInsensitive: true,
        required: [true, "title is required"],
    },
    description: {
        type: String,
        minlength: [10, "description must be 10 char long"],
        required: [true, "description is required"],
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    }
}, {
    versionKey: false,
    timestamps: true
});

categorySchema.plugin(uniqueValidator, {message: '{PATH} already exist'});

module.exports = mongoose.model("category", categorySchema);