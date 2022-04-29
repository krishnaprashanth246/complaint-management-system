const router = require('express').Router();

const res = require('express/lib/response');
// Project Model
const Ticket = require('../models/ticket.model');
const User = require('../models/user.model');

// Assign Technician function


// index (get all tickets)
router.route('/').get((req, res) => {

        Ticket.find()
            .then(tickets => res.json(tickets))
            .catch(err => res.status(400).json('Error: ' + err))
        
    // })
    // .catch(err => res.status(400).json('Error: ' + err));
	
});


// User fetch
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

// Technician fetch
router.route('/technicianEmail/:email').get((req, res) => {
    // console.log(JSON.stringify(req.params) );
    // const endUsermail = req.params.email;
    const technicianEmail = req.params.email;
    // User.find({email: endUsermail}).select('email').then(email => {
        // console.log(endUseremail);
        Ticket.find({
            assignedTechnician: technicianEmail
         }) .then(tickets => res.json(tickets))
            .catch(err => res.status(400).json('Error: ' + err))
        
    // })
    // .catch(err => res.status(400).json('Error: ' + err));
	
});

// CREATE
router.route('/create').post((req, res) => { 
	const categoryId = req.body.categoryId;
    const categoryName = req.body.categoryName;
    const endUser = req.body.endUser;
    // const assignedTechnician = req.body.assignedTechnician;
    const openedDate = req.body.openedDate;
    console.log(openedDate);
    const lastUpdated = openedDate;
    const ticketStatus = "Open";
    const ticketInfo = req.body.ticketInfo;
    // var assignedTechnician = null;
    console.log('hello');

    const dummy = (data)=>{
        var technicianArray = [];
        data.forEach(element => {
            // technicianMap[element.email]+=1;
            technicianArray.push(element.email);
        });
        console.log(technicianArray)
        // assignedTechnician = technicianArray[0];
        // for(var i=0;i<data.lenth;i++)
        // {
        //     var obj = data[i];
        //     console.log(obj.categoryName);
        // }

    }
    // const tech = User.find(
    //     {technicianRole : true}
    // )
    // .then(user => dummy(user))
    // .catch(err => res.status(400).json('Error: ' + err))
    // console.log(technicianArray[0]);
    // console.log(tech)
    // var technicianAll = assignedTechnician(technicianMap);
    // console.log('His' + technicianArray);
    // var arr = technicianArray;

    // const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

    // console.info([...map.keys()]) // to get unique elements
    // console.info([...map.values()]) // to get the occurrences
    // console.info([...map.entries()]) // to get the pairs [element, frequency]

    // We get tassigned technician through other modules
    const assignedTechnician = 'cs18btech11045@iith.ac.in';



    const newTicket = new Ticket({
    	categoryId: categoryId,
        categoryName: categoryName,
        endUser: endUser,
        openedDate: openedDate,
        lastUpdated: lastUpdated,
        ticketStatus: ticketStatus,
        ticketInfo: ticketInfo,
        assignedTechnician: assignedTechnician.split('@')[0],
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