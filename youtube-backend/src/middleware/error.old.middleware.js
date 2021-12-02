//custom error handling
const ErrorResponse = require("../utils/errorResponse.util");

const errorHandler = (err, req, res, next)=>{
    let error = {
        ...err
    }
    error.message = err.message;
    console.log(err);
    //invalid object ID
    if(err.name === "CastError"){
        console.log('error-name---->',err.name)
        const message = "Resource not found"
        error = new ErrorResponse(message, 404)
    }
    // Duplicate  key 
    // if(err.code = 11000){
    //     console.log('error code ----->', err.code)
    //     const message = "Duplicate field value Entered or value already there in database"
    //     error = new ErrorResponse(message,400)
    // }

    //validation error
    if(err.name == 'ValidationError'){
        const message = Object.values(err.errors).map((errr)=>{
            return {
                field: errr.path,
                message : errr.message
            }
        })
        error = new ErrorResponse(null, 400, message)
    }

    res.status(error.statusCode).json({success:false, error: error.messageWithField ||   error.message});
}

module.exports = errorHandler;