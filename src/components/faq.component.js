import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class FAQComponent extends Component{
    render()
    {
        return(
            <ul>

            <li>
                <h3>Internet not working</h3>
                <p>Try Restarting router</p>
            </li>
            <li>
                <h3>Safe App not working </h3>
                <p>No solution available</p>
            </li>
            <li></li>
            <li></li>
            <li></li>

            </ul>
        );
    };

}

export default FAQComponent;