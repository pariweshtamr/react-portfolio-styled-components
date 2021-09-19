import React from 'react'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import { ContactStyled } from '../pages/PagesElements/ContactElements'
import Title from '../components/Title/Title'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../components/Contact/ContactItem'

function Contact() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={'Conatct'} span={'Conatct'} />
            <ContactStyled>
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get in Touch</h4>
                    </div>
                    <form className="form">
                        <div className="form-field">
                            <label htmlFor="name">Enter Your Name*</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Enter Your e-mail*</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject">Enter subject*</label>
                            <input type="text" id="subject" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="">Enter Your Message</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="5"></textarea>
                        </div>
                        <div className="form-field f-button">
                            <PrimaryButton title={'SEND EMAIL'}/>
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactItem title={'Phone'} icon={phone} contact={'+61 *** *** ***'} />
                    <ContactItem title={'E-mail'} icon={email} contact={'tamrpariwesh@gmail.com'} />
                    <ContactItem title={'Address'} icon={location} contact={'Sydney, Australia'} />
                </div>
            </InnerLayout>
            </ContactStyled>

        </MainLayout>
    )
}

export default Contact
