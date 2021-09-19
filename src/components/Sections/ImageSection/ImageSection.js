import React from 'react'
import {ImageStyled} from './ImageElements'
import Img1 from '../../../assets/images/profile.png'
import PrimaryButton from '../../Buttons/PrimaryButton'
function ImageSection() {
    return (
        <ImageStyled>
            <div className="left-content">
                <img src={Img1} alt="profile img" />
            </div>
            <div className="right-content">
                <h4>I am <span>Pariwesh</span></h4>
                <p className="paragraph">
                    Proactive, analytical and detail-oriented aspiring full-stack developer currently learning MongoDB, ExpressJs, ReactJs annd NodeJs (MERN-stack) after possessing a Master degree in Applied Information Technology. Passionate and love to create and build along with solving problems as demonstrated by advanced university course work. Interested in obtaining a junior level position in the developer world.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Skills</p>
                    </div>
                    <div className="info">
                        <p>: Pariwesh Tamrakar</p>
                        <p>: 26</p>
                        <p>: English, Nepali, Hindi</p>
                        <p>: Sydney, Australia</p>
                        <p>: Html, Css, Javascript, React</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'}/>
            </div>
        </ImageStyled>
    )
}
export default ImageSection
