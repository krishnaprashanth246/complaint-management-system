const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    // id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    // phoneNumber : {type :String},
    resetToken: {type : String},
    expireToken: {type : Date},
    enduserRole: {type : Boolean},
    technicianRole: {type : Boolean},
    adminRole: {type : Boolean}
})

const User = mongoose.model('User', userSchema)

module.exports = User;