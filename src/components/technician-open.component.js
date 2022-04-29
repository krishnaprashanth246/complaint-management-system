import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import TechnicianSidebar from './technician-sidebar.component';
import TechnicianTicketPrinter from './technician-ticket-printer.component';
import axios from 'axios';

class TechnicianOpenTickets extends Component{

    constructor(props) {
		super(props);

		// this.deleteTicket = this.deleteTicket.bind(this);

		this.state = { tickets: [] };
	}
    
    componentDidMount() {
        axios.get(`http://localhost:5000/tickets/technicianEmail/${JSON.parse(localStorage.getItem('loginData')).profileObj.email}`
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

    getOpenList() {
        return this.state.tickets.map(currentTicket => {
            if(currentTicket.ticketStatus === "Open") 
                return <TechnicianTicketPrinter 
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
        if(localStorage.getItem("role") != "technician"){
            return (<Redirect to="/selectrole"/>)
        }

        return(
            <div className='wrapper'>
                 {!this.props.showSideBar?<TechnicianSidebar />:null}
            <div>
                <br></br>
				<h3>Open Tickets</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Ticket Info</th>
                            <th>Category Name</th>
                            <th>Enduser ID</th>
                            <th>Opened Date</th>
                            <th>Last Updated</th>
                            <th>Status</th>
                            {/* <th>Feedback</th> */}
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            { this.getOpenList() }
                        </tbody>
                    </table>
			</div>

            </div>
        );      
    };

}

export default TechnicianOpenTickets;