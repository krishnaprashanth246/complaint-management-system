import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AdminSidebar from './admin-sidebar.component';

class AdminTransferRequests extends Component{
    constructor(props)
    {
        super(props);
        if(localStorage.getItem("loginData") == null){
            this.props.history.push("/selectrole");
        }
        if(localStorage.getItem("role") != "admin"){
            this.props.history.push("/selectrole");
        }
    }
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