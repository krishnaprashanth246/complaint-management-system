import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import {GoogleLogout } from 'react-google-login';
const clientID = '610437251477-3qnl60hikuaeq0blbmc2fh95i0k9ld38.apps.googleusercontent.com';

const EndUserSidebar = ({history}) => {
	function handleLogout(e) {
		e.preventDefault();
		localStorage.removeItem("loginData");
		localStorage.removeItem("role");
		history.push("/");
	};
		return(
			<nav class="col-md-2 d-none d-md-block bg-light sidebar">
	  			<center><img src={JSON.parse(localStorage.getItem("loginData")).profileObj.imageUrl} className="navbar-brand" width="110" alt="Profile Image" />
                    <br></br>
                    <Link to="/enduser/profile">Your Profile</Link>  
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
                		<NavLink to="/enduser/faq" className="nav-link" activeClassName="active">
                			<i class="fas fa-question"></i>
                            {/* <i class="fa-solid fa-question"></i> */}
                			FAQs
                		</NavLink>
            		</li>
            		<li>
                		<NavLink to="/enduser/logout" className="nav-link" activeClassName="active" onClick={e => handleLogout(e)}>

							<GoogleLogout
                        clientId={clientID}
                        buttonText="Sign Out"
                        onLogoutSuccess={handleLogout}
                    >
                    </GoogleLogout>
                            {/* <FontAwesomeIcon icon="fa-solid fa-user-tie" /> */}
                			
                		</NavLink>
            		</li>
	    		</ul>
			</nav>
		);
};

export default withRouter(EndUserSidebar);