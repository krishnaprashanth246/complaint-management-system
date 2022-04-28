import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import EndUserSidebar from './enduser-sidebar.component';
import Dashboard from "./dashboard.component";


class EndUserMain extends Component{
    constructor(props){
        super(props);
        if(localStorage.getItem("loginData") == null){
            this.props.history.push("/selectrole");
        }
        if(localStorage.getItem("role") != "enduser"){
            this.props.history.push("/selectrole");
        }
    }
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