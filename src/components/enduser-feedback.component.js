import React, { Component } from 'react';
import axios from 'axios';
import EndUserSidebar from './enduser-sidebar.component';
import { withRouter } from "react-router-dom";
// import Category from '../../server/models/category.model';

 class CreateFeedback extends Component {

    constructor(props){
        super(props);
        this.onChangeFeedback = this.onChangeFeedback.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            // categories : [],
            ticketID : '',
            feedback : '',
            rating: 0,
            assignedTechnician: ''
        }

    }

    componentDidMount() {
        // get list of projects to set default project
        // axios.get('http://localhost:5000/categories/')
        //     .then(res => {
        //         if(res.data.length > 0) {
        //             this.setState({
        //                 categories: res.data.map(category => category.categoryName)
        //             })
        //         }
        //     })
        //     .catch((error) => { console.log(error); })
    }

    onChangeFeedback(e) {
        this.setState({
            feedback: e.target.value
        })
    }

    onChangeRating(e) {
        this.setState({
            rating: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const feedbackBody = {
            ticketID: this.props.match.params.id,
            feedback : this.state.feedback,
            rating: this.state.rating,
            assignedTechnician: this.props.match.params.assignedTechnician
        }

        console.log(feedbackBody);

        axios.post('http://localhost:5000/feedback/create', feedbackBody)
            .then(res => console.log(res.data));

        axios.post('http://localhost:5000/tickets/enduser/update/feedback/'+this.props.match.params.id, feedbackBody)
            .then(res => console.log(res.data));

        // clear form
        this.setState({ 
            ticketID : '',
            feedback : '',
            rating: 0,
            assignedTechnician: ''
        });
        this.props.history.push("/enduser");
    }

    render() {
        return (
        <div className='wrapper'>
            <EndUserSidebar/>
            <div>
                <h3>Create Feedback</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Feedback: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.feedback}
                               onChange={this.onChangeFeedback}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rating: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.rating}
                               onChange={this.onChangeRating}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Submit Feedback"
                               className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        </div>
        );
    }

}
export default withRouter(CreateFeedback);