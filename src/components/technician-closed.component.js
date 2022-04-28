import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import TechnicianSidebar from './technician-sidebar.component';

class TechnicianClosedTickets extends Component{
    constructor(props)
    {
        super(props);
        if(localStorage.getItem("loginData") == null){
            this.props.history.push("/selectrole");
        }
        if(localStorage.getItem("role") != "technician"){
            this.props.history.push("/selectrole");
        }
    }
    render()
    {
        return(
            <div className='wrapper'>
                 <TechnicianSidebar />
                <div>
                    <h1>Your Past Tickets</h1>
                </div>
            </div>
        );
    };

}

export default TechnicianClosedTickets;