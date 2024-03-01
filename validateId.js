const mongoose = require("mongoose")
const validate = (id)=>{
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid){
    return false
    }
    return true
}
module.exports = validate