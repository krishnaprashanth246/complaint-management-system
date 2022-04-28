const router = require('express').Router();

// Category Model
const Category = require('../models/category.model');
console.log('yoooo');
// CREATE
router.route('/create').post((req, res) => {
    const categoryName = req.body.categoryName;
    console.log('hiiii\n');
    const newCategory = new Category({
    	categoryName,
    });

    newCategory.save()
        .then(() => res.json('New Category successfully created!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// READ
router.route('/').get((req, res) => {
    Category.find()
        .then(categories => res.json(categories))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE
router.route('/:id').delete((req,res) => {
Category.findByIdAndDelete(req.params.id)
    .then(ticket => res.json('Category deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

