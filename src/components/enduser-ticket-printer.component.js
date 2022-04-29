
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
                <td>{this.props.ticket.ticketInfo.slice(0,10)}</td>
                <td>{this.props.ticket.categoryName}</td>
                <td>{this.props.ticket.assignedTechnician}</td>
                <td>{this.props.ticket.openedDate}</td>
                <td>{this.props.ticket.lastUpdated}</td>
                <td>{this.props.ticket.ticketStatus}</td>
                {/* { getPriorities(this.props.ticket.priority) } */}
                {/* <td>{!this.props.ticket.feedback ?'Not Submitted':'Submitted'}</td> */}
                <td></td>
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