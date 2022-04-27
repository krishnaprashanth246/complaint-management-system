import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import EndUserSidebar from './enduser-sidebar.component';
import TechnicianSidebar from './technician-sidebar.component';


class FAQComponent extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(

            <div className='wrapper'>
                {this.props.value == "enduser"?
                 <EndUserSidebar />: <TechnicianSidebar/>}
                <div>
                    <ul>

                    <li>
                        <h3>Internet not working</h3>
                        <p>Try Restarting router</p>
                    </li>
                    <li>
                        <h3>Safe App not working </h3>
                        <p>No solution available</p>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>

                    </ul>
                </div>
            </div>    

        );
    };

}

export default FAQComponent;