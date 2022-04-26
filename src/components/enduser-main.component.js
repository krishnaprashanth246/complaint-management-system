import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import EndUserSidebar from './enduser-sidebar.component';
import Dashboard from "./dashboard.component";


class EndUserMain extends Component{

    render(){
        return(
            <div className='wrapper'>
                <EndUserSidebar />
                <Dashboard/>
            </div>
        );
    };
};


export default EndUserMain;