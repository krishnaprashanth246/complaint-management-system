import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AdminSidebar from './admin-sidebar.component';
import EndUserSidebar from './enduser-sidebar.component';
import TechnicianSidebar from './technician-sidebar.component';
import QaComponent from './faq-qa.component';
import "bootstrap/dist/css/bootstrap.min.css";
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
const axios = require('axios')


class EndUserFAQComponent extends Component{

    constructor(props){
        super(props);
    
        this.state = {
            qna : [],
        }

    }
    componentDidMount() {
        axios.get('http://localhost:5000/faq').then(res => {
            console.log(res.data);
            if(res.data.length > 0) {
                this.setState({
                    qna: res.data.map(a => [a.question,a.answer])
                })
            }
        })
        .catch((error) => { console.log(error); })
    }

    getFaqList() {
        return this.state.qna.map(qn => {
            console.log(qn);
            return (
                <QaComponent question={qn[0]} answer={qn[1]}/>
            );
        });
	}

    render()
    {
        if(localStorage.getItem("loginData") == null){
            return (<Redirect to="/selectrole"/>)
        }
        if(localStorage.getItem("role") != "enduser"){
            return (<Redirect to="/selectrole"/>)
        }
        return(

            <div className='wrapper'>
                {/* {this.props.value == "enduser"?
                 <EndUserSidebar />: (this.props.value == "technician"?<TechnicianSidebar/> : <AdminSidebar/>)} */}
                 <EndUserSidebar/>
                 <div className='container'>
                    <h1 className = "faq_head" > Frequently Asked Questions </h1>
                    <ul>
                    {this.getFaqList()} 
                    </ul>                   
                </div>
            </div>    

        );
    };

}

export default EndUserFAQComponent;