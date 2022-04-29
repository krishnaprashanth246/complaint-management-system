import React, { Component } from 'react';
import { Link , withRouter} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import {GoogleLogout } from 'react-google-login';

const clientID = '610437251477-3qnl60hikuaeq0blbmc2fh95i0k9ld38.apps.googleusercontent.com';

const ProfileSidebar = ({history}) => {
	function handleLogout (e) {
		e.preventDefault();
		localStorage.removeItem("loginData");
		localStorage.removeItem("role");
		history.push("/");
	};
	return(
			<nav class="col-md-2 d-none d-md-block bg-light sidebar">
	  			<center><img src={JSON.parse(localStorage.getItem("loginData")).profileObj.imageUrl} className="navbar-brand" width="120" alt="Tech support" />
                    <br></br> 
                </center>
                <ul class="nav flex-column">
                    <li>
                		<NavLink to="/technician/logout" className="nav-link" activeClassName="active" onClick={e => handleLogout(e)}>

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

export default withRouter(ProfileSidebar);