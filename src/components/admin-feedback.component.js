import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AdminSidebar from './admin-sidebar.component';
import AdminFeedbackPrinter from './admin-feedback-printer.component';
import axios from 'axios';

class AdminOpenFeedback extends Component{
    
    constructor(props) {
		super(props);

		// this.deleteTicket = this.deleteTicket.bind(this);

		this.state = { feedbacks: [] };
	}

    componentDidMount() {
        axios.get(`http://localhost:5000/feedback`
            // , 
            // {
            // params: {
            //   email: JSON.parse(localStorage.getItem('loginData')).profileObj.email
            // }}
            )
            .then(res => {
                this.setState({ feedbacks: res.data })
            })
            .catch(error => console.log(error));
    }

    getOpenList() {
        return this.state.feedbacks.map(currentFeedback => {
            // if(currentTicket.ticketStatus === "Open") 
            return <AdminFeedbackPrinter 
            		ticket={currentFeedback} 
                    key={currentFeedback._id}
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
				<h3>Feedbacks</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Ticket Id</th>
                            <th>Rating (/5)</th>
                            <th>Feedback</th>
                            <th>Assigned Technician</th>
                            {/* <th>Opened Date</th>
                            <th>Last Updated</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Actions</th> */}
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

export default AdminOpenFeedback;