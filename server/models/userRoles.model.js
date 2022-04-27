import mongoose from 'mongoose'

const userRoleSchema = mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    role: String
})

const UserRole = mongoose.model('UserRole', userRoleSchema)

export default UserRole