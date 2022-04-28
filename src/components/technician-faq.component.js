import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AdminSidebar from './admin-sidebar.component';
import EndUserSidebar from './enduser-sidebar.component';
import TechnicianSidebar from './technician-sidebar.component';


class TechnicianFAQComponent extends Component{
    constructor(props){
        super(props);
        
    }
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
                {/* {this.props.value == "enduser"?
                 <EndUserSidebar />: (this.props.value == "technician"?<TechnicianSidebar/> : <AdminSidebar/>)} */}
                 <TechnicianSidebar/>
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

export default TechnicianFAQComponent;