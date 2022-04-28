const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    // id: {type: Number, required: true, unique: true},
    // categoryId: {type: String, required: true},
    categoryName: {type: String, required: true}
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category;