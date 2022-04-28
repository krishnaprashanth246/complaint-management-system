import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import TechnicianSidebar from './technician-sidebar.component';
import TechnicianDescription from "./technician-description.component";


class TechnicianMain extends Component{
    constructor(props){
        super(props);
        if(localStorage.getItem("loginData") == null){
            this.props.history.push("/selectrole");
        }
        if(localStorage.getItem("role") != "technician"){
            this.props.history.push("/selectrole");
        }
    }
    render(){
        return(
            <div className='wrapper'>
                <TechnicianSidebar />
                <TechnicianDescription/>
            </div>
        );
    };
};


export default TechnicianMain;