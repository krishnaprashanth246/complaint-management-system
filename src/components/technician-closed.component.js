import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import TechnicianSidebar from './technician-sidebar.component';

class TechnicianClosedTickets extends Component{
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