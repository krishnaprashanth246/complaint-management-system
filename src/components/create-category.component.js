import React, { Component } from 'react';
import axios from 'axios';
// import Category from '../../server/models/category.model';

export default class CreateCategory extends Component {

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            categories : [],
            categoryName : ''
        }

    }

    componentDidMount() {
        // get list of projects to set default project
        axios.get('http://localhost:5000/categories/')
            .then(res => {
                if(res.data.length > 0) {
                    this.setState({
                        categories: res.data.map(category => category.categoryName)
                    })
                }
            })
            .catch((error) => { console.log(error); })
    }

    onChangeName(e) {
        this.setState({
            categoryName: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const category = {
            categoryName: this.state.categoryName
        }

        console.log(category);

        axios.post('http://localhost:5000/categories/create', category)
            .then(res => console.log(res.data));

        // clear form
        this.setState({ categoryName: ''});
    }

    render() {
        return (
            <div>
                <h3>Create New Category</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Category: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.name}
                               onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Create Category"
                               className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }

}
