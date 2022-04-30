import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import AdminSidebar from './admin-sidebar.component';

// const ticketStatusList = ['Open', 'Closed'];
class AdminRoleAssignEdit extends Component{
    constructor(props)
    {
        super(props);
        this.onChangeTechnicianRole = this.onChangeTechnicianRole.bind(this);
        this.onChangeAdminRole = this.onChangeAdminRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            enduserRole: false,
            technicianRole: false,
            adminRole: false,
          };
    }

    componentDidMount(){

  
        axios.get('http://localhost:5000/users/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    enduserRole: res.data.enduserRole,
                    technicianRole: res.data.technicianRole,
                    adminRole: res.data.adminRole,
                })
            })
            .catch((error) => { console.log(error); })

    }

    onChangeTechnicianRole(e) {
        this.setState({
          technicianRole: e.target.value
        })
    
    }
    onChangeAdminRole(e) {
        this.setState({
          adminRole: e.target.value
        })
    
    }
      onSubmit(e) {
    	e.preventDefault();

    	const user = {
            enduserRole: this.state.enduserRole,
            technicianRole: this.state.technicianRole,
            adminRole: this.state.adminRole,
        }

        axios.post(`http://localhost:5000/users/${this.props.match.params.id}`, user)
            .then(res => console.log(res.data));
            
        console.log('Successfully updated.');
        this.props.history.push("/admin");

    }




    render()
    {
        if(localStorage.getItem("loginData") == null){
            return (<Redirect to="/selectrole"/>)
        }
        if(localStorage.getItem("role") != "admin"){
            return (<Redirect to="/selectrole"/>)
        }
        return(
            <div className='wrapper'>
                <AdminSidebar />
            <div>
                <h3>Edit Ticket</h3>
                {/* {this.props.location.state.param} */}
                <br></br>
                <div >

                </div>
                <form onSubmit={this.onSubmit}>
                    {/* <div className="form-group">
                    <label>Ticket Info: </label>
                    <textarea style={{ resize: 'none' }}
                        type="text"
                        maxLength="250"
                        rows="3"
                        className="form-control"
                        value={this.state.ticketInfo}
                        onChange={this.onChangeTicketInfo}
                    ></textarea>
        </div>*/}
                    <div className="form-group">
                    <label>Is Technician: </label>
                    <select className="form-control"
                        value={this.state.technicianRole}
                        onChange={this.onChangeTechnicianRole}>
                        <option key={true}
                            value={true}>True
                            </option>
                        <option key={false}
                            value={false}>False
                            </option>
                    </select>
                    </div> 
                    <div className="form-group">
                    <label>Is Admin: </label>
                    <select className="form-control"
                        value={this.state.adminRole}
                        onChange={this.onChangeAdminRole}>
                        <option key={true}
                            value={true}>True
                            </option>
                        <option key={false}
                            value={false}>False
                            </option>
                    </select>
                    </div> 
                    

                    <div className="form-group">
                    <input type="submit"
                        value="Submit Ticket"
                        className="btn btn-primary"
                    />
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default withRouter(AdminRoleAssignEdit);