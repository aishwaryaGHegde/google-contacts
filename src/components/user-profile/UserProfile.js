import React from "react";
import {withRouter} from 'react-router-dom'
import { useGoogleLogout } from 'react-google-login'
import Constants from '../../Constants'
import './UserProfile.css'

const UserProfile = (props) => {
    let {history} = props
    const profile = JSON.parse(localStorage.getItem(Constants.localstorage.userProfile) || {})
    const {signOut} = useGoogleLogout({
        clientId: Constants.googleAuth.clientID,
        onLogoutSuccess,
        onFailure
    })
    function onLogoutSuccess() {
        console.log('success')
        history.push("/")
    }
    function onFailure() {
        console.log('failure')
    }
    return (
        <div className="user-profile">
            <img className="avatar" src={profile.imageUrl} alt=""/>
            <div className="display-name">{profile.name}</div>
            <div className="email">{profile.email}</div>
            <div className="logout" onClick={signOut}>
                <div className="logout-circle" onClick={signOut}>
                    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.63275 22.4757C4.65476 28.684 11.5381 32.0118 18.2807 30.5244C25.0233 29.0369 29.8676 23.1219 29.9971 16.2184C30.1266 9.31496 25.5075 3.22243 18.8255 1.48315C12.1434 -0.256124 5.14011 2.81121 1.88739 8.90174" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="logout-line">
                    <svg width="25" height="2" viewBox="0 0 25 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.937744H23.4052" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="logout-arrow">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.06744 12.2723L6.40201 6.93778L1.06744 1.60321" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
};

export default withRouter(UserProfile);