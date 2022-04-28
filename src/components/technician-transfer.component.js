import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import TechnicianSidebar from './technician-sidebar.component';

class TechnicianTransferRequests extends Component{

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
                    <h1>Your Transfer Requests</h1>
                </div>
            </div>
        );      
    };

}

export default TechnicianTransferRequests;