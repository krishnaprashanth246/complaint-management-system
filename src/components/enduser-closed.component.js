import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import EndUserSidebar from './enduser-sidebar.component';
import EndUserTicketPrinter from './enduser-ticket-printer.component';
import axios from 'axios';

class EndUserClosed extends Component{
    
    constructor(props) {
		super(props);

		// this.deleteTicket = this.deleteTicket.bind(this);

		this.state = { tickets: [] };
	}
    
    componentDidMount() {
        axios.get(`http://localhost:5000/tickets/email/${JSON.parse(localStorage.getItem('loginData')).profileObj.email}`
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
                return <EndUserTicketPrinter arg="closed" 
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
        if(localStorage.getItem("role") != "enduser"){
            return (<Redirect to="/selectrole"/>)
        }

        return(
            // <div>
            <div className='wrapper'>
                 {/* <EndUserSidebar /> */}
                 {!this.props.showSideBar?<EndUserSidebar />:null}
            <div>
                <br></br>
				<h3>Closed Tickets</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Ticket Info</th>
                            <th>Category Name</th>
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

export default EndUserClosed;