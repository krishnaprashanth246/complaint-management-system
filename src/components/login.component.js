import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';
//import { useNavigate } from "react-router-dom";

const clientID = '610437251477-3qnl60hikuaeq0blbmc2fh95i0k9ld38.apps.googleusercontent.com';


export default function Login() {
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onSuccess = async (res) => {
        console.log('[Login Success] CurrentUser: ', res.profileObj);
        // const gres = await axios.post('http://localhost:5000/api/google-login'+ JSON.stringify({
        //     token: res.tokenId,
        //   }));
        //   {
        //     method: 'POST',
        //     body: JSON.stringify({
        //       token: res.tokenId,
        //     }),
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   });
        // const data = await res.json();
        setShowloginButton(false);
        setShowlogoutButton(true);
        localStorage.setItem("loginData", JSON.stringify(res));
        console.log(localStorage.getItem("loginData"));
    };
    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);

        //localStorage.removeItem('loginData');
    };
    const handleLogout = (res) => {
        localStorage.removeItem("loginData");
        setShowloginButton(true);
        setShowlogoutButton(false);
    }
    //const navigate = useNavigate;
    return (
        // <h2><center>Sign In With Google</center></h2>
        <div>
            <div>
                {showloginButton ?
                    <GoogleLogin
                        clientId={clientID}
                        buttonText="Sign In"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    /> : null}

                {showlogoutButton ?
                    <GoogleLogout
                        clientId={clientID}
                        buttonText="Sign Out"
                        onLogoutSuccess={handleLogout}
                    >
                    </GoogleLogout> : null
                }
            </div>
        </div>
    );
}
