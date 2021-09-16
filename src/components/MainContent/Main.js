import React from 'react'
import {MainStyled} from '../MainContent/MainElements'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Particles/Particle'

function Main() {
    return (
        <MainStyled>
            <Particle />
            <div className="typography">
                <h1>Hi, I'm <span>Pariwesh</span></h1>
                <p>Knack of building applications with front end operations</p>
                <div className="icons">
                    <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="icon i-github">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="icon i-link">
                        <LinkedInIcon />
                    </a>
                    <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="icon i-twitter">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="icon i-fb">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="icon i-ig">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </MainStyled>
    )
}

export default Main
