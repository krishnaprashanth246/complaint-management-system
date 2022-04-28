import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AdminSidebar from './admin-sidebar.component';

class AdminTransferRequests extends Component{
    render()
    {
        return(
            <div className='wrapper'>
                 <AdminSidebar />
                <div>
                    <h1>All Transfer Requests</h1>
                </div>
            </div>
        );      
    };

}

export default AdminTransferRequests;