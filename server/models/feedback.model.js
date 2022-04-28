const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
    // id: {type: Number, required: true, unique: true},
    ticketId: Number,
    feedback: String,
    rating: Number
})

const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports =Feedback