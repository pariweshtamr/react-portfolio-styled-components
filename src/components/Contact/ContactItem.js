import React from 'react'
import { ContactItemStyled } from './ContactItemElements';

function ContactItem({icon, title, contact}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                {
                    icon
                }             
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact}</p>
            </div>
        </ContactItemStyled>
    )
}
export default ContactItem
