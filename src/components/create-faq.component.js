import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import AdminSidebar from './admin-sidebar.component';
// import Category from '../../server/models/category.model';

class CreateFaq extends Component {

    constructor(props){
        super(props);
        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onChangeAnswer = this.onChangeAnswer.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            question : '',
            answer : ''
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

    onChangeQuestion(e) {
        this.setState({
            question: e.target.value
        })
    }

    onChangeAnswer(e) {
        this.setState({
            answer: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const faqInfo = {
            question: this.state.question,
            answer: this.state.answer
        }

        console.log(faqInfo);

        axios.post('http://localhost:5000/faq/create', faqInfo)
            .then(res => console.log(res.data));

        // clear form
        this.setState({ question: '', answer: ''});
        this.props.history.push('/admin')
    }

    render() {
        return (
        <div className='wrapper'>
            <AdminSidebar/>
            <div>
                <h3>Create a FAQ</h3>
                <form onSubmit={this.onSubmit}>
            
                    <div className="form-group">
						<label>Question: </label>
                        <textarea style={{resize: 'none'}}
                        type="text"
                        maxLength="250"
                        rows="1"
                        className="form-control"
                        value={this.state.question}
                        onChange={this.onChangeQuestion}
                        ></textarea>
					</div>
                    <div className="form-group">
						<label>Answer: </label>
                        <textarea style={{resize: 'none'}}
                        type="text"
                        maxLength="250"
                        rows="3"
                        className="form-control"
                        value={this.state.answer}
                        onChange={this.onChangeAnswer}
                        ></textarea>
					</div>
                    <div className="form-group">
                        <input type="submit"
                               value="Create FAQ"
                               className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        </div>
        );
    }

}
export default withRouter(CreateFaq);