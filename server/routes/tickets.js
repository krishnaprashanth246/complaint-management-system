const router = require('express').Router();

// Project Model
const Ticket = require('../models/ticket.model');

// index (get all tickets)
router.route('/').get((req, res) => {
	Ticket.find()
		.then(tickets => res.json(tickets))
		.catch(err => res.status(400).json('Error: ' + err));
});

// CREATE
router.route('/create').post((req, res) => { 
	const categoryId = req.body.categoryId;
    const categoryName = req.body.categoryName;
    const endUser = req.body.endUser;
    // const assignedTechnician = req.body.assignedTechnician;
    const openedDate = req.body.openedDate;
    const lastUpdated = openedDate;
    const ticketStatus = "Open";
    const ticketInfo = req.body.ticketInfo;
    // We get tassigned technician through other modules
    const assignedTechnician = null;
    const newTicket = new Ticket({
    	categoryId: categoryId,
        categoryName: categoryName,
        endUser: endUser,
        openedDate: openedDate,
        lastUpdated: lastUpdated,
        ticketStatus: ticketStatus,
        ticketInfo: ticketInfo,
        assignedTechnician: assignedTechnician
    });

    newTicket.save()
     	.then(() => res.json('Ticket successfully created.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// READ
router.route('/:id').get((req,res) => {
    Ticket.findById(req.params.id)
        .then(ticket => res.json(ticket))
        .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE
router.route('/enduser/update/:id').post((req,res) => {
    Ticket.findById(req.params.id)
        .then(ticket => {

            ticket.categoryId = req.body.categoryId;
            ticket.categoryName = req.body.categoryName;
            ticket.endUser = req.body.endUser;
            // const assignedTechnician = req.body.assignedTechnician;
            // ticket.openedDate = req.body.openedDate;
            ticket.lastUpdated = new Date();
            // ticket.ticketStatus = req.body.ticketStatus;
            ticket.ticketInfo = req.body.ticketInfo;
            // We get tassigned technician through other modules
            // ticket.assignedTechnician = null;

            ticket.save()
                .then(() => res.json('Ticket updated'))
                .catch(err => res.status(400).json('Error: ' + err));
    	})
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/technician/update/:id').post((req,res) => {
    Ticket.findById(req.params.id)
        .then(ticket => {

            ticket.categoryId = req.body.categoryId;
            ticket.categoryName = req.body.categoryName;
            // ticket.endUser = req.body.endUser;
            // const assignedTechnician = req.body.assignedTechnician;
            // ticket.openedDate = req.body.openedDate;
            ticket.lastUpdated = new Date();
            ticket.ticketStatus = req.body.ticketStatus;
            ticket.ticketInfo = req.body.ticketInfo;
            // We get tassigned technician through other modules
            // ticket.assignedTechnician = null;

            ticket.save()
                .then(() => res.json('Ticket updated'))
                .catch(err => res.status(400).json('Error: ' + err));
    	})
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/admin/update/:id').post((req,res) => {
    Ticket.findById(req.params.id)
        .then(ticket => {

            ticket.categoryId = req.body.categoryId;
            ticket.categoryName = req.body.categoryName;
            ticket.endUser = req.body.endUser;
            assignedTechnician = req.body.assignedTechnician;
            // ticket.openedDate = req.body.openedDate;
            ticket.lastUpdated = new Date();
            ticket.ticketStatus = req.body.ticketStatus;
            ticket.ticketInfo = req.body.ticketInfo;
            // We get tassigned technician through other modules

            ticket.save()
                .then(() => res.json('Ticket updated'))
                .catch(err => res.status(400).json('Error: ' + err));
    	})
        .catch(err => res.status(400).json('Error: ' + err));
});
// DELETE
router.route('/:id').delete((req,res) => {
    Ticket.findByIdAndDelete(req.params.id)
        .then(ticket => res.json('Ticket deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;