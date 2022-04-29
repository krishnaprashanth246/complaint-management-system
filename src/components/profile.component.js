import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import ProfileSidebar from './profile-sidebar.component';
import { withRouter } from "react-router-dom";

class CreateTicket extends Component {
    render() {
    
        return (
          <div className='wrapper'>
            <ProfileSidebar />
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Username - </p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{JSON.parse(localStorage.getItem("loginData")).profileObj.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email ID - </p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{JSON.parse(localStorage.getItem("loginData")).profileObj.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Roll No - </p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{
                      JSON.parse(localStorage.getItem("loginData")).profileObj.email.substring(0,
                        JSON.parse(localStorage.getItem("loginData")).profileObj.email.indexOf('@'))
                      }</p>
                    </div>
                  </div>
    
                </div>
              </div>
             </div>
             </div>
            
    
        );
    }
}

export default withRouter(CreateTicket);