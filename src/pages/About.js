import React from 'react'
import { AboutStyled } from './PagesElements/AboutElements'
import { MainLayout } from '../styles/Layouts'
import Title from '../components/Title/Title'
import ImageSection from '../components/Sections/ImageSection/ImageSection'
import Services from '../components/Sections/ServicesSection/Services'

function About() {
    return (
            <MainLayout>
                <AboutStyled>
                    <Title title={'About Me'} span={'About Me'} />
                    <ImageSection />
                    <Services />
                </AboutStyled>
            </MainLayout>
    )
}

export default About
