import mongoose from 'mongoose'

const feedbackSchema = mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    ticketId: Number,
    feedback: String,
    rating: Number
})

const Feedback = mongoose.model('Feedback', feedbackSchema)

export default Feedback