const router = require('express').Router();

// Project Model
const User = require('../models/user.model');

// CREATE
router.route('/create').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const enduserRole = req.body.enduserRole || true;
    const technicianRole = req.body.technicianRole || false;
    const adminRole = req.body.adminRole || false;
    // const phoneNumber = req.body.phoneNumber || null;
    const resetToken = req.body.resetToken || null;
    const expireToken = req.body.expireToken || null;


    const newUser = new User({
    	name,
    	email,
    	enduserRole,
        technicianRole,
        adminRole,
        phoneNumber,
        resetToken,
        expireToken
    });

    newUser.save()
        .then(() => res.json('User successfully created!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// READ
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE
router.route('/:id').delete((req,res) => {
User.findByIdAndDelete(req.params.id)
    .then(ticket => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add role
router.route('/:id').post((req,res) => {
    User.findById(req.params.id)
    .then(user => {

        user.enduserRole = req.body.enduserRole;
        user.technicianRole = req.body.technicianRole;
        user.adminRole = req.body.adminRole;

        user.save()
            .then(() => res.json(`User ${req.params.id} role has been updated`))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
    });

module.exports = router;

