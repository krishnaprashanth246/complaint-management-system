const router = require('express').Router();

// Project Model
const Ticket = require('../models/ticket.model');
const User = require('../models/user.model');

// index (get all tickets)
router.route('/').get((req, res) => {

        Ticket.find()
            .then(tickets => res.json(tickets))
            .catch(err => res.status(400).json('Error: ' + err))
        
    // })
    // .catch(err => res.status(400).json('Error: ' + err));
	
});

router.route('/email/:email').get((req, res) => {
    // console.log(JSON.stringify(req.params) );
    // const endUsermail = req.params.email;
    const endUseremail = req.params.email;
    // User.find({email: endUsermail}).select('email').then(email => {
        // console.log(endUseremail);
        Ticket.find({
            endUser: endUseremail
         }) .then(tickets => res.json(tickets))
            .catch(err => res.status(400).json('Error: ' + err))
        
    // })
    // .catch(err => res.status(400).json('Error: ' + err));
	
});


const assignTechnician = (technicians, tickets) => {
    let technicianidx = {};
    technicians.forEach(element => {
        technicianidx[(element.email)] = 0;
    });
    tickets.forEach(ticket => {
        if(ticket.assignTechnician)
            technicianidx[(ticket.assignTechnician)] += 1;
    });
    let keys = Object.keys(technicianidx);
    let min = technicianidx[keys[0]];
    let minkey = keys[0];
    let i;

    for (i = 1; i < keys.length; i++) {
        let val = technicianidx[keys[i]];
        if (val < min) {
            min = val;
            minkey = keys[i];
        }
    }
    return minkey;
}

// CREATE
router.route('/create').post(async (req, res) => { 
	const categoryId = req.body.categoryId;
    const categoryName = req.body.categoryName;
    const endUser = req.body.endUser;
    // const assignedTechnician = req.body.assignedTechnician;
    const openedDate = req.body.openedDate;
    console.log(openedDate);
    const lastUpdated = openedDate;
    const ticketStatus = "Open";
    const ticketInfo = req.body.ticketInfo;
    // We get tassigned technician through other modules
    let assignedTechnician = null;
    let technicians = await User.find({technicianRole: true});
    let tickets = await Ticket.find();
    // console.log(technicians);
    // console.log(tickets);
    assignedTechnician = assignTechnician(technicians,tickets);
    console.log(assignedTechnician);
    const newTicket = new Ticket({
    	categoryId: categoryId,
        categoryName: categoryName,
        endUser: endUser,
        openedDate: openedDate,
        lastUpdated: lastUpdated,
        ticketStatus: ticketStatus,
        ticketInfo: ticketInfo,
        assignedTechnician: assignedTechnician,
        feedback: ''
    });

    newTicket.save()
     	.then(() => res.json('Ticket successfully created.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// READ
router.route('/id/:id').get((req,res) => {
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
            ticket.assignedTechnician = req.body.assignedTechnician;
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