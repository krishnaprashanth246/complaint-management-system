import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import EndUserSidebar from './enduser-sidebar.component';
import Dashboard from "./dashboard.component";


const EndUserMain = ({history}) => {
        if(localStorage.getItem("loginData") == null){
            history.push("/selectrole");
        }
        if(localStorage.getItem("role") != "enduser"){
            history.push("/selectrole");
        }
        return(
            <div className='wrapper'>
                <EndUserSidebar />
                <Dashboard/>
            </div>
        );
};


export default withRouter(EndUserMain);