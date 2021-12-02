//customize error sent by mongoose
class ErrorResponse extends Error{
    constructor(message, statusCode,messageWithField=null){
        super(message) // calling the const ructor in super class
        this.statusCode = statusCode;
        this.messageWithField = messageWithField;
    }
}
module.exports = ErrorResponse;