import React, { useState , useCallback} from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';
import '../styles.css'


//import { useNavigate } from "react-router-dom";

const clientID = '610437251477-3qnl60hikuaeq0blbmc2fh95i0k9ld38.apps.googleusercontent.com';


const Login = ({history}) => {
    if(localStorage.getItem("role") == null){
        history.push("/");
    }
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onSuccess = useCallback(async (res) => {
        // res.preventDefault();
        console.log('[Login Success] CurrentUser: ', res.profileObj);
        // const gres = await axios.post('http://localhost:5000/api/google-login',JSON.stringify({
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
        axios.get('http://localhost:5000/users/email/'+res.profileObj.email).then((userdata) => {
        if(localStorage.getItem("role") === "enduser"){
            if(userdata.data == null){
                //do post into userdb
                axios.post('http://localhost:5000/users/create',{
                    name: res.profileObj.name,
                    email: res.profileObj.email,
                }).then(e => console.log(e));
            }
        }
        else{
            if(userdata.data === null){
                history.push("/selectrole");
            }
            else{
                if(!(localStorage.getItem("role") === "technician" && userdata.data.technicianRole 
                || localStorage.getItem("role") === "admin" && userdata.data.adminRole)){
                    history.push("/selectrole");
                    console.log("something else is wrong");
                }
            }
        }});
        // console.log(userdata);
        setShowloginButton(false);
        setShowlogoutButton(true);
        localStorage.setItem("loginData", JSON.stringify(res));
        // console.log('yoyoyoyoyo' + JSON.parse(localStorage.getItem("loginData")).profileObj.imageUrl);
        // setLoginData(JSON.stringify(res));
        // console.log(localStorage.getItem("loginData"));
        history.push("/"+localStorage.getItem("role"));

    },[history]);

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
        <div className = "login_div">
            <p > Login using google </p>

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

export default withRouter(Login);