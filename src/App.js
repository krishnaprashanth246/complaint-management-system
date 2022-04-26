import React from 'react';
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

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />

        <div className="wrapper">
            <Sidebar />
            <div id="content">
                {/* <Route path="/" exact component={Dashboard} /> */}
            
                <Switch>
                  <Route path="/" exact component={SelectRoles} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/home" component={Dashboard} />
                  
                  <Route path="/tickets/create" component={CreateTicket} />
                  <Route path="/manage-users" component={ManageUsers} />
                  <Route path="/users/create" component={CreateUser} />
                  <Route path="/manage-projects" component={ManageProjects} />
                  <Route path="/edit/:id" component={EditTicket} />
                  <Route component={TryAgain} /> 
                </Switch>
            </div>

        </div>
    </BrowserRouter>
  );
}

