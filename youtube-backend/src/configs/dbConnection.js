const mongoose = require("mongoose");
const connect = ()=>{
    try{
        console.log("database connected successfully");
        return mongoose.connect("mongodb+srv://youtube:dbUserPassword@cluster0.qhdmg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    }catch(err){
        console.log("error",err.message);
    }
}
module.exports = connect;