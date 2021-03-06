import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import TechnicianSidebar from './technician-sidebar.component';
import TechnicianDescription from "./technician-description.component";


class TechnicianMain extends Component{
    
    render(){
        if(localStorage.getItem("loginData") == null){
            return (<Redirect to="/selectrole"/>)
        }
        if(localStorage.getItem("role") != "technician"){
            return (<Redirect to="/selectrole"/>)
        }

        return(
            <div className='wrapper'>
                <TechnicianSidebar />
                <TechnicianDescription/>
            </div>
        );
    };
};


export default TechnicianMain;