import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import EndUserSidebar from './enduser-sidebar.component';
import { withRouter } from "react-router-dom";

// const priorities = ['Low', 'Medium', 'High'];
// const statuses = ['Open', 'In Progress', 'Resolved'];
// const types = ['Bug/Error', 'Feature Request', 'Security', 'Other'];

class CreateTicket extends Component {
  constructor(props) {
    super(props);

    // this.onChangeCategoryID = this.onChangeCategoryID.bind(this);
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onChangeTicketInfo = this.onChangeTicketInfo.bind(this);
    // this.onChangeAssignee = this.onChangeAssignee.bind(this);
    // this.onChangePriority = this.onChangePriority.bind(this);
    // this.onChangeStatus = this.onChangeStatus.bind(this);
    // this.onChangeType = this.onChangeType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      // categoryId: '',
      categoryName: '',
      endUser: JSON.parse(localStorage.getItem("loginData")).profileObj.email,
      // assignedTechnician: '',
      openedDate: '',
      // lastUpdated: '',
      // ticketStatus: 'Open',
      ticketInfo: '',
      categories: [],
      categoriesId: []
    };
  }

  componentDidMount() {
    // set default values for state properties
    //   this.setState({
    //     priority: priorities[0],
    //     status: statuses[0],
    //     type: types[0]
    //   });

    // get list of users to set default assignee
    //   axios.get('http://localhost:5000/users/')
    //     .then(res => {
    //         if(res.data.length > 0) {
    //             this.setState({
    //                 users: res.data.map(user => user.name),
    //                 assignee: res.data[0].name
    //             })
    //         }
    //     })
    //     .catch((error) => { console.log(error); })

    // get list of projects to set default project
    axios.get('http://localhost:5000/categories/')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            categories: res.data.map(category => category.categoryName),
            categoriesId: res.data.map(category => category._id),
            categoryName: res.data[0].categoryName
            // categoryID : res.data[0]._id
          })
        }
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

  // onChangeCategoryID(e) {
  //     this.setState({
  //         categoryID: e.target.value
  //     })
  // }

  onChangeTicketInfo(e) {
    this.setState({
      ticketInfo: e.target.value
    })
  }

  // onChangeAssignee(e) {
  //     this.setState({
  //         assignee: e.target.value
  //     })
  // }

  // onChangePriority(e) {
  //     this.setState({
  //         priority: e.target.value
  //     })
  // }

  // onChangeStatus(e) {
  //     this.setState({
  //         status: e.target.value
  //     })
  // }

  // onChangeType(e) {
  //     this.setState({
  //         type: e.target.value
  //     })
  // }

  onSubmit(e) {
    e.preventDefault();
    // const currentDate = new Date(); 
    const ticket = {
      // title: this.state.title,
      // description: this.state.description,
      // projectName: this.state.projectName,
      // assignee: this.state.assignee,
      // priority: this.state.priority,
      // status: this.state.status,
      // type: this.state.type

      categoryId: this.state.categoriesId[this.state.categories.indexOf(this.state.categoryName)],
      categoryName: this.state.categoryName,
      endUser: this.state.endUser,
      // assignedTechnician: '',
      openedDate: new Date(),
      // lastUpdated: currentDate,
      // ticketStatus: 'Opened',
      ticketInfo: this.state.ticketInfo
    }
    console.log(ticket)
    axios.post('http://localhost:5000/tickets/create', ticket)
      .then(res => console.log(res.data))

    // alert('Successfully created.');

    // clear form
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
    // const navigate = useNavigate()
    this.props.history.push("/enduser/tickets/open");


  }

  render() {
    if (localStorage.getItem("loginData") == null) {
      return (<Redirect to="/selectrole" />)
    }
    if (localStorage.getItem("role") != "enduser") {
      return (<Redirect to="/selectrole" />)
    }

    return (
      <div className='wrapper'>
        <EndUserSidebar />
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
        {/* </div>
        <div> */}
          <h3>Submit a Ticket</h3>
          <form onSubmit={this.onSubmit}>
            {/* <div className="form-group">
						<label>Title: </label>
            	<input type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
            	/>
					</div> */}
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
            {/* <div className="form-group">
            <label>Assigned To: </label>
              <select className="form-control"
                      value={this.state.assignee}
                      onChange={this.onChangeAssignee}>
                      {
                        this.state.users.map((user) => {
                        return <option key={user}
                                       value={user}>{user}
                               </option>;
                        })
                      }
              </select>
          </div> */}
            {/* <div className="form-group">
						<label>Priority: </label>
            	<select className="form-control"
                      value={this.state.priority}
                      onChange={this.onChangePriority}>
                      {
                          priorities.map((priority) => {
                          return <option key={priority}
                                         value={priority}>{priority}
                                 </option>;
                          })
                      }
              </select>
					</div> */}
            {/* <div className="form-group">
						<label>Status: </label>
            	<select className="form-control"
                      value={this.state.status}
                      onChange={this.onChangeStatus}>
                      {
                          statuses.map((status) => {
                          return <option key={status}
                                         value={status}>{status}
                                 </option>;
                          })
                      }
              </select>
					</div> */}
            {/* <div className="form-group">
						<label>Type: </label>
            	<select className="form-control"
                      value={this.state.type}
                      onChange={this.onChangeType}>
                      {
                          types.map((type) => {
                          return <option key={type}
                                         value={type}>{type}
                                 </option>;
                          })
                      }
              </select>
					</div> */}
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

export default withRouter(CreateTicket);