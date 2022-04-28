const router = require('express').Router();

// FAQ Model
const Faq = require('../models/faq.model');

// CREATE
router.route('/create').post((req, res) => {
    const question = req.body.question;
    const answer = req.body.answer;

    const newFaq = new Faq({
    	question, answer
    });

    newFaq.save()
        .then(() => res.json('FAQ Added successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// READ
router.route('/').get((req, res) => {
    Faq.find()
        .then(faqs => res.json(faqs))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE
router.route('/:id').delete((req,res) => {
Faq.findByIdAndDelete(req.params.id)
    .then(() => res.json('FAQ deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE
router.route('/update/:id').post((req,res) => {
    Faq.findById(req.params.id)
        .then(faq => {

            faq.question = req.body.question;
            faq.answer = req.body.answer;

            faq.save()
                .then(() => res.json(`FAQ with ${req.params.id} updated`))
                .catch(err => res.status(400).json('Error: ' + err));
    	})
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

