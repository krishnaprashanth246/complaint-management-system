const mongoose = require('mongoose');

const faqSchema = mongoose.Schema({
    // id: {type: Number, required: true, unique: true},
    question: String,
    answer: String
})

const Faq = mongoose.model('FAQ', faqSchema)

module.exports= Faq