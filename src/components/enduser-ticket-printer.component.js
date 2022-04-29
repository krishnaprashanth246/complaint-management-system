
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default class EndUserTicketPrinter extends Component{
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <tr>
                <td>{this.props.ticket.ticketInfo.slice(0,10)}...</td>
                <td>{this.props.ticket.categoryName}</td>
                <td>{this.props.ticket.assignedTechnician?this.props.ticket.assignedTechnician.split('@')[0]:null}</td>
                <td>{this.props.ticket.openedDate ? this.props.ticket.openedDate.split('T')[0] : 'N/A'}</td>
                <td>{this.props.ticket.lastUpdated? this.props.ticket.lastUpdated.split('T')[0] : 'N/A'}</td>
                <td>{this.props.ticket.ticketStatus}</td>
                {/* { getPriorities(this.props.ticket.priority) } */}
                {this.props.arg == "closed"?(<td>{this.props.ticket.feedback?"Submitted" : "Not Submitted" }</td>):null }
                <td><Link to={`/enduser/tickets/${this.props.ticket._id}`} >View Ticket</Link></td>
                {/* <td><Link to= {{
                    pathname: `/enduser/tickets/id`,
                    state: {param: this.props.ticket._id}                
                }}>View Ticket</Link></td> */}
                {/* <td>
                    <Link to={"/edit/"+this.props.ticket._id} className="badge badge-info">Edit</Link>
                    <br></br>
                    <a href="#" onClick={() => { 
                        if(window.confirm('Are you sure you want to delete this ticket?')) 
                            this.props.deleteTicket(this.props.ticket._id) 
                    }} 
                    className="badge badge-danger">Delete</a>
                    <br></br>
                    
                    <MarkButton 
                        mark={this.props.ticket.status} 
                        ticketID={this.props.ticket._id}
                    />
                </td> */}
            </tr>
        );
    }

}