import React from "react";
import {withRouter} from 'react-router-dom'
import './Contact.css'

const Contacts = (props) => {
    let {contact} = props
    let formattedContact = {
        name: (((contact || {}).names || [])[0] || {}).givenName,
        phone: (((contact || {}).phoneNumbers || [])[0] || {}).value,
        email: (((contact || {}).emailAddresses || [])[0] || {}).value,
        imageUrl: (((contact || {}).coverPhotos || [])[0] || {}).url
    }
    return (
        <div className="contact-display">
            <div className="select"></div>
            <img className="contact-avatar" src={formattedContact.imageUrl} alt=""/>
            <div className="contact-display-name">{formattedContact.name}</div>
            <div className="contact-email">{formattedContact.email}</div>
            <div className="contact-phone-number">{formattedContact.phone}</div>
            <div className="delete"></div>
        </div>
    )
};

export default withRouter(Contacts);