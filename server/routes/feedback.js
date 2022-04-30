const router = require('express').Router();

// Feedback Model
const Feedback = require('../models/feedback.model');

// CREATE
router.route('/create').post((req, res) => {
    const ticketId = req.body.ticketID;
    const feedback = req.body.feedback;
    const rating = req.body.rating;
    const assignedTechnician = req.body.assignedTechnician;

    const newFeedback = new Feedback({
    	ticketId, feedback, rating, assignedTechnician
    });

    newFeedback.save()
        .then(() => res.json('Feedback Added successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// READ
router.route('/').get((req, res) => {
    Feedback.find()
        .then(feedbacks => res.json(feedbacks))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE
router.route('/:id').delete((req,res) => {
Feedback.findByIdAndDelete(req.params.id)
    .then(() => res.json('Feedback deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE
// router.route('/update/:id').post((req,res) => {
//     Faq.findById(req.params.id)
//         .then(faq => {

//             faq.question = req.body.question;
//             faq.answer = req.body.answer;

//             faq.save()
//                 .then(() => res.json(`FAQ with ${req.params.id} updated`))
//                 .catch(err => res.status(400).json('Error: ' + err));
//     	})
//         .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;

