const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => {
    try {
        console.log("database connected successfuly");
        // return mongoose.connect("mongodb+srv://youtube:dbUserPassword@cluster0.qhdmg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        return mongoose.connect("mongodb://127.0.0.1:27017/youtube-clone");
    } catch (err) {
        console.log("error", err.message);
    }
};