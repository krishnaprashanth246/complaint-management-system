import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { GoogleLogout } from 'react-google-login';

const clientID = '610437251477-3qnl60hikuaeq0blbmc2fh95i0k9ld38.apps.googleusercontent.com';

const AdminSidebar = ({ history }) => {
	function handleLogout(e) {
		e.preventDefault();
		localStorage.removeItem("loginData");
		localStorage.removeItem("role");
		history.push("/");
	}
	return (
		<nav class="col-md-2 d-none d-md-block bg-light sidebar">
			<center><img src={logo} className="navbar-brand" width="120" alt="Tech support" />
				<br></br>
				<Link to="/admin/profile/:userid">Your Profile</Link>
			</center>
			<ul class="nav flex-column">
				<li className="nav-item">
					<NavLink to="/admin" className="nav-link" activeClassName="active">
						<i class="fas fa-home"></i>
						Dashboard Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/tickets/all" className="nav-link" activeClassName="active">
						<i class="fas fa-ticket-alt"></i>
						All Tickets
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/tickets/open" className="nav-link" activeClassName="active">
						<i class="fas fa-ticket-alt"></i>
						Open Tickets
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/tickets/closed" className="nav-link" activeClassName="active">
						<i class="fas fa-ticket-alt"></i>
						closed Tickets
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/tickets/transfer" className="nav-link" activeClassName="active">
						<i class="fas fa-ticket-alt"></i>
						Transfer Requests
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/#" className="nav-link" activeClassName="active">
						<i class="fas fa-ticket-alt"></i>
						Manual Assignment Requests
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/feedback" className="nav-link" activeClassName="active">
						<i class="fas fa-ticket-alt"></i>
						Feedbacks
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/faq" className="nav-link" activeClassName="active">
						<i class="fas fa-question"></i>
						{/* <i class="fa-solid fa-question"></i> */}
						FAQs
					</NavLink>
				</li>
				<li>
					<NavLink to="#" className="nav-link" activeClassName="active">

						<GoogleLogout
							clientId={clientID}
							buttonText="Log Out"
							onLogoutSuccess={handleLogout}
						>
						</GoogleLogout>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default withRouter(AdminSidebar);