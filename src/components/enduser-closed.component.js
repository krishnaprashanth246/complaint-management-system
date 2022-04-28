import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import EndUserSidebar from './enduser-sidebar.component';

class EndUserClosed extends Component{
    constructor(props)
    {
        super(props);
        if(localStorage.getItem("loginData") == null){
            this.props.history.push("/selectrole");
        }
        if(localStorage.getItem("role") != "enduser"){
            this.props.history.push("/selectrole");
        }
    }
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