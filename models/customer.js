
const mongoose = require('mongoose'); // Erase if already required
// Declare the Schema of the Mongo model
const customerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique : true
    },
});

//Export the model
module.exports = mongoose.model('Customer', customerSchema);