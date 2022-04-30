import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AdminSidebar from './admin-sidebar.component';
import AdminTicketPrinter from './admin-ticket-printer.component';
import axios from 'axios';

class AdminRoleAssign extends Component{
    
    constructor(props) {
		super(props);

		this.state = { users: [] };
	}

    componentDidMount() {
        axios.get(`http://localhost:5000/users`
            // , 
            // {
            // params: {
            //   email: JSON.parse(localStorage.getItem('loginData')).profileObj.email
            // }}
            )
            .then(res => {
                this.setState({ users: res.data })
            })
            .catch(error => console.log(error));
    }


    getAllList() {
        return this.state.users.map(user => {
            return (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.technicianRole? 'True': 'False'}</td>
                    <td>
                        {user.adminRole? 'True': 'False'}
                    </td>
                    <td>
                        <Link 
                            to={`/admin/roleassign/edit/${user._id}`}
                        >
                            Edit
                            </Link>
                    </td>
                </tr>
            );
        })
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
                <br></br>
				<h3>All Users</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Is Technician</th>
                            <th>Is Admin</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            { this.getAllList() }
                        </tbody>
                    </table>
			</div>

            </div>
        );      
    };

}

export default AdminRoleAssign;