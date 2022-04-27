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
import Login from "./components/login.component";
import SelectRoles from "./components/select-roles.component";
import TryAgain from "./components/try-again.component"
import EndUserMain from './components/enduser-main.component';
import EndUserOpenTickets from './components/enduser-open.component';
import EndUserClosedTickets from './components/enduser-closed.component';
import TechnicianMain from './components/technician-main.component';
import TechnicianOpenTickets from './components/technician-open.component';
import TechnicianClosedTickets from './components/technician-closed.component';
import TechnicianTransferRequests from './components/technician-transfer.component';
import FAQ from './components/faq.component'


export default function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  // const [isUserLoggedIn, setUserLogIn] = useState(true);

  return (
    <BrowserRouter>
        <Navbar setLoginData={setLoginData}/>

        <div className="wrapper">
            {/* <Sidebar /> */}
            <div id="content">
                {/* <Route path="/" exact component={Dashboard} /> */}
            
                <Switch>
                  <Route path="/" exact component={!localStorage.getItem('loginData')? SelectRoles : Dashboard} />
                  <Route path="/home" component={Dashboard} />
                  <Route path="/enduser/tickets/create" exact component={CreateTicket} />
                  <Route path="/manage-users" component={ManageUsers} />
                  <Route path="/users/create" component={CreateUser} />
                  <Route path="/manage-projects" component={ManageProjects} />
                  <Route path="/edit/:id" component={EditTicket} />
                  <Route path="/enduser" exact component={EndUserMain} />
                  <Route path="/enduser/tickets/open" exact component={EndUserOpenTickets} />
                  <Route path="/enduser/tickets/closed" exact component={EndUserClosedTickets} />
                  <Route path="/technician" exact component={TechnicianMain} />
                  <Route path="/technician/tickets/open" exact component={TechnicianOpenTickets} />
                  <Route path="/technician/tickets/closed" exact component={TechnicianClosedTickets} />
                  <Route path="/technician/tickets/transfer" exact component={TechnicianTransferRequests} />
                  <Route path="/enduser/faq" exact component={FAQ} />
                  <Route path="/technician/faq" exact component={FAQ} />
                  <Route component={TryAgain} /> 
                </Switch>
            </div>

        </div>
    </BrowserRouter>
  );
}

