import React, { Component } from 'react';

import axios from 'axios';
import { withRouter } from "react-router-dom";
import EndUserSidebar from './enduser-sidebar.component';
import { Link, Redirect } from 'react-router-dom';

class EndUserEditTicket extends Component{
    constructor(props)
    {
        super(props);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onChangeTicketInfo = this.onChangeTicketInfo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            categoryName: '',
            endUser: JSON.parse(localStorage.getItem("loginData")).profileObj.email,
            ticketInfo: '',
            categories: [],
            categoriesId: []
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
                    ticketInfo: res.data.ticketInfo
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
            ticketInfo : this.state.ticketInfo
        }

        axios.post(`http://localhost:5000/tickets/enduser/update/${this.props.match.params.id}`, ticket)
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
                categories: [],
                categoriesId: []
          
              });
            
        console.log('Successfully updated.');
        this.props.history.push("/enduser");

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
                <EndUserSidebar />
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

export default withRouter(EndUserEditTicket);