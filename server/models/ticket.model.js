const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    // ticketId: {type: Number, required: true, unique: true},
    categoryId: {type: String, required: true},
    categoryName: {type: String, required:true},
    endUser: {type: String, required: true},
    assignedTechnician: {type: Number},
    openedDate: {type: Date, required: true, default: new Date()},
    lastUpdated: Date,
    ticketStatus: String,
    ticketInfo: String,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket ;