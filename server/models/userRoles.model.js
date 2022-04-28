const mongoose = require('mongoose');

const userRoleSchema = mongoose.Schema({
    // id: {type: Number, required: true, unique: true},
    role: [{type : String}],
    endUser: {type: Number}

})

const UserRole = mongoose.model('UserRole', userRoleSchema)

module.exports= UserRole