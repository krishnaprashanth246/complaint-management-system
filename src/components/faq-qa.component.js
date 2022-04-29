import React, { Component } from 'react';
import '../styles.css'

export default class QaComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div className = "list_style">
                <li>
                    <h3> Q : {this.props.question}</h3>
                    <div className = "faq_design"> <p>{this.props.answer}</p> </div>
                </li>
            </div>
        );
    }
}