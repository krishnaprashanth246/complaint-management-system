const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    // ticketId: {type: Number, required: true, unique: true},
    categoryId: {type: String, required: true},
    categoryName: {type: String, required:true},
    endUser: {type: String, required: true},
    assignedTechnician: {type: String},
    openedDate: {type: Date, required: true, default: new Date()},
    lastUpdated: Date,
    ticketStatus: String,
    ticketInfo: String,
    feedback: String
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket ;