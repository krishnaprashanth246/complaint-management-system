import React, {useState} from 'react';
import { BrowserRouter as BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// const express = require('express');
// const mongoose=require('mongoose');
// const dotenv = require('dotenv')
// const passport = require('passport')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// require('./config/passport')(passport)

// import components
import Navbar from "./components/navbar.component";
import Sidebar from "./components/sidebar.component";
import Dashboard from "./components/dashboard.component";
import CreateTicket from "./components/create-ticket.component";
import CreateUser from "./components/create-user.component";
import ManageUsers from "./components/manage-users.component";
import ManageProjects from "./components/manage-projects.component";
import EditTicket from "./components/edit-ticket.component";
import Loginpage from "./components/login.component";
import SelectRoles from "./components/select-roles.component";
import TryAgain from "./components/try-again.component"
import EndUserMain from './components/enduser-main.component';
import EndUserProfile from "./components/enduser-profile.component";
import EndUserOpenTickets from './components/enduser-open.component';
import EndUserClosedTickets from './components/enduser-closed.component';
import TechnicianMain from './components/technician-main.component';
import TechnicianProfile from "./components/technician-profile.component";
import TechnicianOpenTickets from './components/technician-open.component';
import TechnicianClosedTickets from './components/technician-closed.component';
import TechnicianTransferRequests from './components/technician-transfer.component';
import AdminMain from './components/admin-main.component';
import AdminProfile from "./components/admin-profile.component";
import AdminAllTickets from './components/admin-all.component';
import AdminOpenTickets from './components/admin-open.component';
import AdminClosedTickets from './components/admin-closed.component';
import AdminTransferRequests from './components/admin-transfer.component';
import EndUserFAQComponent from './components/enduser-faq.component'
import TechnicianFAQComponent from './components/technician-faq.component'
import AdminFAQComponent from './components/admin-faq.component'
import CreateFaq from './components/create-faq.component';
import CreateCategory from './components/create-category.component';
import EndUserSingleTicket from './components/enduser-single-ticket.component';
import EndUserEditTicket from './components/enduser-edit-ticket.component';
import TechnicianSingleTicket from './components/technician-single-ticket.component';
import TechnicianEditTicket from "./components/technician-edit-ticket.component";
import AdminSingleTicket from './components/admin-single-ticket.component';
import AdminEditTicket from "./components/admin-edit-ticket.component";
import AdminRoleAssign from './components/admin-roleassign.component';
import AdminRoleAssignEdit from './components/admin-edit-roleassign.component';

export default function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  // const [isUserLoggedIn, setUserLogIn] = useState(true);

  return (
    <BrowserRouter>
        {/* <Navbar setLoginData={setLoginData}/> */}

        <div className="wrapper">
            {/* <Sidebar /> */}
            <div id="content">
                {/* <Route path="/" exact component={Dashboard} /> */}
            
                <Switch>
                  <Route path="/login" exact component={Loginpage} />
                  <Route path="/" exact component={SelectRoles} />
                  <Route path="/selectrole" exact component={SelectRoles} />
                  <Route path="/enduser/tickets/create" exact component={CreateTicket} />
                  <Route path="/manage-users" component={ManageUsers} />
                  <Route path="/users/create" component={CreateUser} />
                  <Route path="/manage-projects" component={ManageProjects} />
                  <Route path="/edit/:id" component={EditTicket} />
                  <Route path="/enduser" exact component={EndUserMain} />
                  <Route path="/enduser/profile" exact component={EndUserProfile} />
                  <Route path="/enduser/tickets/open" exact component={EndUserOpenTickets} />
                  <Route path="/enduser/tickets/closed" exact component={EndUserClosedTickets} />
                  <Route path="/technician" exact component={TechnicianMain} />
                  <Route path="/technician/profile" exact component={TechnicianProfile} />
                  <Route path="/technician/tickets/open" exact component={TechnicianOpenTickets} />
                  <Route path="/technician/tickets/closed" exact component={TechnicianClosedTickets} />
                  <Route path="/technician/tickets/transfer" exact component={TechnicianTransferRequests} />
                  <Route path="/admin" exact component={AdminMain} />
                  <Route path="/admin/profile" exact component={AdminProfile} />
                  <Route path="/admin/tickets/all" exact component={AdminAllTickets} />
                  <Route path="/admin/tickets/open" exact component={AdminOpenTickets} />
                  <Route path="/admin/tickets/closed" exact component={AdminClosedTickets} />
                  <Route path="/admin/tickets/transfer" exact component={AdminTransferRequests} />
                  <Route path="/enduser/faq" exact component={EndUserFAQComponent} />
                  <Route path="/technician/faq" exact component={TechnicianFAQComponent} />
                  <Route path="/admin/faq" exact component={AdminFAQComponent} />
                  <Route path="/faq/create" exact component={CreateFaq} />
                  <Route path="/category/create" exact component={CreateCategory} />
                  <Route path="/enduser/tickets/:id" exact component={EndUserSingleTicket} />
                  <Route path="/enduser/tickets/edit/:id" exact component={EndUserEditTicket} />
                  <Route path="/technician/tickets/:id" exact component={TechnicianSingleTicket} />
                  <Route path="/technician/tickets/edit/:id" exact component={TechnicianEditTicket} />
                  <Route path="/admin/tickets/:id" exact component={AdminSingleTicket} />
                  <Route path="/admin/tickets/edit/:id" exact component={AdminEditTicket} />
                  <Route path="/admin/roleassign" exact component={AdminRoleAssign} />
                  <Route path="/admin/roleassign/edit/:id" exact component={AdminRoleAssignEdit} />

                  <Route component={TryAgain} /> 
                </Switch>
            </div>

        </div>
    </BrowserRouter>
  );
}

