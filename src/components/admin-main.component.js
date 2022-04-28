import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AdminSidebar from './admin-sidebar.component';
import AdminDescription from "./admin-description.component";


class AdminMain extends Component{
    constructor(props){
        super(props);
        if(localStorage.getItem("loginData") == null){
            this.props.history.push("/selectrole");
        }
        if(localStorage.getItem("role") != "admin"){
            this.props.history.push("/selectrole");
        }
    }
    render(){
        return(
            <div className='wrapper'>
                <AdminSidebar />
                <AdminDescription/>
            </div>
        );
    };
};


export default AdminMain;