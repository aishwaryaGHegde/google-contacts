import React from "react";
import {withRouter} from 'react-router-dom'
import './Contact.css'

const Contacts = (props) => {
    let {contact} = props
    return (
        <div className="contact-display">
            <div className="select"></div>
            <div className="contact-avatar">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="19.5" fill="url(#pattern0)" stroke="#FF0000"/>
                </svg>
            </div>
            <div className="contact-display-name">{contact.name}</div>
            <div className="contact-email">{contact.email}</div>
            <div className="contact-phone-number">{contact.phone}</div>
            <div className="delete"></div>
        </div>
    )
};

export default withRouter(Contacts);