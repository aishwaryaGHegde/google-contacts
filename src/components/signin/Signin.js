import React from "react";
import GoogleLogin from 'react-google-login';
import {withRouter} from 'react-router-dom'
import Constants from '../../Constants';
import Background from '../background/Background'
import Utility from "../../Utility";
import './Signin.css'

const Signin = (props) => {
    const {history, cookies} = props
    const signinConstants = Constants.signin
    function successHandler(event={}) {
        //setting a cookie
        cookies.set(Constants.cookies.tokens, JSON.stringify(event.tokenObj));
        // set user data as local storage
        localStorage.setItem(Constants.localstorage.userProfile, JSON.stringify(event.profileObj))
        Utility.usePeople(cookies, history)
      }
      function errorHandler(event) {
          console.log(event)
          console.log("user authentication failed")
      }
    return (
        <div className="signin">
            <Background/>
            <div className="signin-container">
                <div className="google-signin-text">
                    {signinConstants.displayText}
                </div>
                <GoogleLogin
                    className="signin-button"
                    clientId={Constants.googleAuth.clientID}
                    buttonText={signinConstants.buttonText}
                    onSuccess={successHandler}
                    onFailure={errorHandler} 
                    scope={"https://www.googleapis.com/auth/contacts"}/>
            </div>
        </div>
    )
};

export default withRouter(Signin);