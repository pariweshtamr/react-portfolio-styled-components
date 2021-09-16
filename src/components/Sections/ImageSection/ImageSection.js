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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, impedit quo quia corrupti ut illum, quisquam repudiandae maiores ullam cupiditate necessitatibus quam obcaecati rem amet?
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Skills</p>
                    </div>
                    <div className="info">
                        <p>: Pariwesh Tamrakar</p>
                        <p>: 26</p>
                        <p>: Nepali</p>
                        <p>: English, Nepali, Hindi</p>
                        <p>: Sydney, Australia</p>
                        <p>: Html, css, Javascript, React</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'}/>
            </div>
        </ImageStyled>
    )
}
export default ImageSection
