import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';

const clientID = '610437251477-3qnl60hikuaeq0blbmc2fh95i0k9ld38.apps.googleusercontent.com';


export default class Login extends Component{
    render()
    {
        const onSuccess = (res) => {
            console.log('[Login Success] CurrentUser: ', res.profileObj);
        };
        const onFailure = (res) => {
            console.log('[Login Failed] res:', res);
        };
        return(
            // <h2><center>Sign In With Google</center></h2>
            <div>
            <GoogleLogin clientId={clientID} buttonText="Google Login" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} style={{ marginTop: '100px' }} /*isSignedIn={true}*//>
            </div>
            
        );
    };
}
