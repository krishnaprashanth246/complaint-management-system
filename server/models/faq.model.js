import mongoose from 'mongoose'

const faqSchema = mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    question: String,
    answer: String
})

const Faq = mongoose.model('FAQ', faqSchema)

export default Faq