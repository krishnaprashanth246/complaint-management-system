import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './login.component';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light navbar-expand-lg ml-auto">
            	<div className="container-fluid">
	            	<button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
	                </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		                <Login/>
	                </div>
                </div>
            </nav>
        );
    }
}
