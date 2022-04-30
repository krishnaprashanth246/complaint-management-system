import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AdminSidebar from './admin-sidebar.component';
import AdminTicketPrinter from './admin-ticket-printer.component';
import axios from 'axios';

class AdminTransferRequests extends Component{
    constructor(props) {
		super(props);

		this.state = { tickets: [] };
	}
    componentDidMount() {
        axios.get(`http://localhost:5000/tickets/`
            // , 
            // {
            // params: {
            //   email: JSON.parse(localStorage.getItem('loginData')).profileObj.email
            // }}
            )
            .then(res => {
                this.setState({ tickets: res.data })
            })
            .catch(error => console.log(error));
    }
    getTransferList() {
        return this.state.tickets.map(currentTicket => {
            if(currentTicket.ticketStatus === "Open" && currentTicket.assignedTechnician === null) 
                return <AdminTicketPrinter 
            			ticket={currentTicket} 
                        key={currentTicket._id}
                        />;
        })
	}
    render()
    {
        if(localStorage.getItem("loginData") == null){
            return (<Redirect to="/selectrole"/>)
        }
        if(localStorage.getItem("role") != "admin"){
            return (<Redirect to="/selectrole"/>)
        }

        return(
            <div className='wrapper'>
                 <AdminSidebar />
                <div>
                    <h3>All Transfer Requests</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Ticket Info</th>
                            <th>Category Name</th>
                            <th>Enduser ID</th>
                            <th>Assigned Technician</th>
                            <th>Opened Date</th>
                            <th>Last Updated</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            { this.getTransferList() }
                        </tbody>
                    </table>
                </div>
            </div>
        );      
    };

}

export default AdminTransferRequests;