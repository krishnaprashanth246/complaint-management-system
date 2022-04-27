import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import TechnicianSidebar from './technician-sidebar.component';

class TechnicianOpenTickets extends Component{
    render()
    {
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