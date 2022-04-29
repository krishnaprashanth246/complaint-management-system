import React, { Component } from 'react';

export default class QaComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <li>
                    <h3>{this.props.question}</h3>
                    <p>{this.props.answer}</p>
                </li>
            </div>
        );
    }
}