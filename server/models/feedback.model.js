const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
    // id: {type: Number, required: true, unique: true},
    ticketId: String,
    feedback: String,
    rating: Number,
    assignedTechnician: String
})

const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports =Feedback