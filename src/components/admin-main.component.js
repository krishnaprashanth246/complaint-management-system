import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AdminSidebar from './admin-sidebar.component';
import AdminDescription from "./admin-description.component";


class AdminMain extends Component{
    
    render(){
        if(localStorage.getItem("loginData") == null){
            return (<Redirect to="/selectrole"/>)
        }
        if(localStorage.getItem("role") != "admin"){
            return (<Redirect to="/selectrole"/>)
        }

        return(
            <div className='wrapper'>
                <AdminSidebar />
                <AdminDescription/>
            </div>
        );
    };
};


export default AdminMain;