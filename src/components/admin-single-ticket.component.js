import React, { Component } from 'react';

import axios from 'axios';
import { withRouter } from "react-router-dom";
import AdminSidebar from './admin-sidebar.component';
import AdminEditTicketComponent from './admin-edit-ticket.component';

class AdminSingleTicket extends Component{
    constructor(props)
    {
        super(props);
        // this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        // this.onChangeTicketInfo = this.onChangeTicketInfo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            categoryName: '',
            endUser: '',
            ticketInfo: '',
            assignedTechnician:'',
            lastUpdated: '',
            ticketStatus: '',
            ticketInfo: '',
            // feedback: '',
            openedDate : ''
            // categories: [],
            // categoriesId: []
          };


    }

    componentDidMount(){

  
        axios.get('http://localhost:5000/tickets/id/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    // categories: res.data.map(category => category.categoryName),
                    // categoriesId: res.data.map(category => category._id),
                    categoryName: res.data.categoryName,
                    ticketInfo: res.data.ticketInfo,
                    assignedTechnician: res.data.assignedTechnician?res.data.assignedTechnician:'N/A',
                    lastUpdated : res.data.lastUpdated.split('T')[0],
                    ticketStatus : res.data.ticketStatus,
                    ticketInfo: res.data.ticketInfo,
                    // feedback: res.data.feedback?'Submitted':'Not Submitted',
                    openedDate: res.data.openedDate.split('T')[0],
                    endUser : res.data.endUser

                })
            })
            .catch((error) => { console.log(error); })


    }

      onSubmit(e) {
    	e.preventDefault();
        // <EnduserEditTicketComponent id={this.props.match.params.id}/>
        this.props.history.push(`/admin/tickets/edit/${this.props.match.params.id}`)
    }




    render()
    {
        return(
            <div className='wrapper'>
                <AdminSidebar />
            <div>
                <h3>Ticket Details</h3>
                {/* {this.props.location.state.param} */}
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Ticket Info: </label>
                    <textarea style={{ resize: 'none' }}
                        type="text"
                        maxLength="250"
                        rows="3"
                        className="form-control"
                        value={this.state.ticketInfo}
                        readOnly="readonly"
                    ></textarea>
                    </div>

                    <div className="form-group">
                    <label>Assigned Technician: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={this.state.assignedTechnician.split('@')[0]}
                        readOnly="readonly"
                    ></input>
                    </div>

                    <div className="form-group">
                    <label>Category Name: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={this.state.categoryName}
                        readOnly="readonly"
                    ></input>
                    </div>

                    <div className="form-group">
                    <label>Ticket Status: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={this.state.ticketStatus}
                        readOnly="readonly"
                    ></input>
                    </div>

                    <div className="form-group">
                    <label>Last Updated: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={this.state.lastUpdated}
                        readOnly="readonly"
                    ></input>
                    </div>

                    <div className="form-group">
                    <label>Created by: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={this.state.endUser}
                        readOnly="readonly"
                    ></input>
                    </div>

                    <div className="form-group">
                    <label>Created Date: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={this.state.openedDate}
                        readOnly="readonly"
                    ></input>
                    </div>

                    {/* <div className="form-group">
                    <label>Feedback: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={this.state.feedback}
                        readOnly="readonly"
                    ></input>
                    </div> */}


                    <div className="form-group">
                    <input type="submit"
                        value="Edit Ticket"
                        className="btn btn-primary"
                    />
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default withRouter(AdminSingleTicket);