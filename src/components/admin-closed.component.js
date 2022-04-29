import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AdminSidebar from './admin-sidebar.component';
import AdminTicketPrinter from './admin-ticket-printer.component';
import axios from 'axios';

class AdminClosedTickets extends Component{
    
    constructor(props) {
		super(props);

		// this.deleteTicket = this.deleteTicket.bind(this);

		this.state = { tickets: [] };
	}

    componentDidMount() {
        axios.get(`http://localhost:5000/tickets/${JSON.parse(localStorage.getItem('loginData')).profileObj.email}`
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

    getClosedList() {
        return this.state.tickets.map(currentTicket => {
            if(currentTicket.ticketStatus === "Closed") 
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
                <br></br>
				<h3>All Closed Tickets</h3>
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
                            { this.getClosedList() }
                        </tbody>
                    </table>
			</div>

            </div>
        );
    };

}

export default AdminClosedTickets;