import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import TechnicianSidebar from './technician-sidebar.component';

class TechnicianOpenTickets extends Component{

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
                 <TechnicianSidebar />
                <div>
                    <h1>Your Open Tickets</h1>
                </div>
            </div>
        );      
    };

}

export default TechnicianOpenTickets;