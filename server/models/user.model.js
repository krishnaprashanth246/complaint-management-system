import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phoneNumber : String,
    resetToken:String,
    expireToken:Date
})

const User = mongoose.model('User', userSchema)

export default User