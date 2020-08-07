import React from "react";
import {withRouter} from 'react-router-dom'
import Constants from '../../Constants'
import UserProfile from '../user-profile/UserProfile'
import Background from '../background/Background'
import Contacts from '../contact/Contact'
import './ContactList.css'

const ContactList = (props) => {
    let {history} = props
    let resp = JSON.parse(localStorage.getItem(Constants.localstorage.contacts)) || {}
    return (
        <div className="contacts-container">
            <UserProfile history={history}/>
            <div className="display-container">
                <Background />
                <div className="display-header">
                    <div className="display-title">{Constants.title.contacts}</div>
                    <div className="display-number">{`(${120})`}</div>
                </div>
                <div className="column-headers">
                    <div className="column-name">{Constants.title.name}</div>
                    <div className="column-email">{Constants.title.email}</div>
                    <div className="column-phone">{Constants.title.Phone}</div>
                </div>
                <div className="display-contacts-container">
                    <ul className="display-contacts-list-ul">
                        {resp.connections.map(contact => 
                            <Contacts contact={contact}></Contacts>  
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default withRouter(ContactList);