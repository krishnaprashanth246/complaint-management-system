import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import EndUserSidebar from './enduser-sidebar.component';

class EndUserClosed extends Component{
    render()
    {
        return(
            <div className='wrapper'>
                 <EndUserSidebar />
                <div>
                    <h1>Your Closed Tickets</h1>
                </div>
            </div>
        );
    };

}

export default EndUserClosed;