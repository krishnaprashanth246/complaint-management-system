import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default class EndUserSidebar extends Component {
	render() {
		return(
			<nav class="col-md-2 d-none d-md-block bg-light sidebar">
	  			<center><img src={logo} className="navbar-brand" width="120" alt="Tech support" />
                    <br></br>
                    <Link to="/enduser/profile/:userid">Your Profile</Link>  
                </center>
	    		<ul class="nav flex-column">
	    			<li className="nav-item">
	    				<NavLink to="/enduser" onlyActiveOnIndex={true} className="nav-link" activeClassName="active">
	    					<i class="fas fa-home"></i>
	    					Dashboard Home
	    				</NavLink>
	    			</li>
                    <li>
                		<NavLink to="/enduser/tickets/create" className="nav-link" activeClassName="active">
                			<i class="fas fa-ticket-alt"></i>
                			Create a Ticket
                		</NavLink>
            		</li>
	    			<li>
                		<NavLink to="/enduser/tickets/open" className="nav-link" activeClassName="active">
                			<i class="fas fa-ticket-alt"></i>
                			Open Tickets
                		</NavLink>
            		</li>
            		<li>
                		<NavLink to="/enduser/tickets/closed" className="nav-link" activeClassName="active">
                			<i class="fas fa-ticket-alt"></i>
                			Closed Tickets
                		</NavLink>
            		</li>
                    <li>
                		<NavLink to="/faq" className="nav-link" activeClassName="active">
                			<i class="fas fa-question"></i>
                            {/* <i class="fa-solid fa-question"></i> */}
                			FAQs
                		</NavLink>
            		</li>
            		<li>
                		<NavLink to="/enduser/logout" className="nav-link" activeClassName="active">
                			<i class="fas fa-user-tie"></i>
                            {/* <FontAwesomeIcon icon="fa-solid fa-user-tie" /> */}
                			Logout
                		</NavLink>
            		</li>
	    		</ul>
			</nav>
		);
	}
}
