import React, { Component } from 'react';

import axios from 'axios';
import { withRouter } from "react-router-dom";
import AdminSidebar from './admin-sidebar.component';

// const ticketStatusList = ['Open', 'Closed'];
class AdminEditTicket extends Component{
    constructor(props)
    {
        super(props);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onChangeTicketInfo = this.onChangeTicketInfo.bind(this);
        this.onChangeTicketStatus = this.onChangeTicketStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            categoryName: '',
            endUser: '',
            ticketInfo: '',
            ticketStatus : '',
            categories: [],
            categoriesId: [],
            assignedTechnician: '',
            ticketStatusList : ["Open", "Closed"]
          };


    }

    componentDidMount(){

        axios.get('http://localhost:5000/categories/')
            .then(res => {
                if (res.data.length > 0) {
                this.setState({
                    categories: res.data.map(category => category.categoryName),
                    categoriesId: res.data.map(category => category._id),
                    // categoryName: res.data[0].categoryName
                    // categoryID : res.data[0]._id
                })
                }
            })
            .catch((error) => { console.log(error); })
  
        axios.get('http://localhost:5000/tickets/id/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    // categories: res.data.map(category => category.categoryName),
                    // categoriesId: res.data.map(category => category._id),
                    categoryName: res.data.categoryName,
                    ticketInfo: res.data.ticketInfo,
                    ticketStatus: res.data.ticketStatus,
                    assignedTechnician : res.data.assignedTechnician
                })
            })
            .catch((error) => { console.log(error); })


    }

    onChangeCategoryName(e) {
        this.setState({
          categoryName: e.target.value
        })
        // let i=0;
        // for()
    
      }

    onChangeTicketStatus(e){
        this.setState({
            ticketStatus: e.target.value
        })
    }


      onChangeTicketInfo(e) {
        this.setState({
          ticketInfo: e.target.value
        })
      }

      onSubmit(e) {
    	e.preventDefault();

    	const ticket = {
            categoryId : this.state.categoriesId[this.state.categories.indexOf(this.state.categoryName)],
  		    categoryName: this.state.categoryName,
  		    // endUser: this.state.endUser,
            // assignedTechnician: '',
  		    // openedDate: new Date(),
  		    // lastUpdated: new Date(),
  		    // ticketStatus: 'Opened',
            assignedTechnician : this.state.assignedTechnician,
            ticketInfo : this.state.ticketInfo,
            ticketStatus : this.state.ticketStatus
        }

        axios.post(`http://localhost:5000/tickets/admin/update/${this.props.match.params.id}`, ticket)
            .then(res => console.log(res.data));

            this.setState({
                //   categoryId: '',
                categoryName: '',
                endUser: '',
                //   assignedTechnician: '',
                //   openedDate: '',
                //   lastUpdated:'',
                //   ticketStatus: '',
                ticketInfo: '',
                ticketStatus: '',
                categories: [],
                categoriesId: []
                // ticketStatusList : ['Open', 'Closed']
          
              });
            
        console.log('Successfully updated.');
        this.props.history.push("/admin");

    }




    render()
    {
        return(
            <div className='wrapper'>
                <AdminSidebar />
            <div>
                <h3>Edit Ticket</h3>
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
                        onChange={this.onChangeTicketInfo}
                    ></textarea>
                    </div>
                    <div className="form-group">
                    <label>Category Name: </label>
                    <select className="form-control"
                        value={this.state.categoryName}
                        onChange={this.onChangeCategoryName}>
                        {
                        this.state.categories.map((category) => {
                            return <option key={category}
                            value={category}>{category}
                            </option>;
                        })
                        }
                    </select>
                    </div>
                    
                    <div className="form-group">
                    <label>Ticket Status: </label>
                    <select className="form-control"
                        value={this.state.ticketStatus}
                        onChange={this.onChangeTicketStatus}>
                        {
                            this.state.ticketStatusList.map((ticketstatus) => {
                            return <option key={ticketstatus}
                            value={ticketstatus}>{ticketstatus}
                            </option>;
                        })
                        }
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

export default withRouter(AdminEditTicket);