import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import EndUserSidebar from './enduser-sidebar.component';

class EndUserOpen extends Component{
    
    render()
    {
        if(localStorage.getItem("loginData") == null){
            return (<Redirect to="/selectrole"/>)
        }
        if(localStorage.getItem("role") != "enduser"){
            return (<Redirect to="/selectrole"/>)
        }

        return(
            <div className='wrapper'>
                 <EndUserSidebar />
                <div>
                    <h1>Your Open Tickets</h1>
                </div>
            </div>
        );      
    };

}

export default EndUserOpen;