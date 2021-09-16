import React from 'react'
import { InnerLayout } from '../../../styles/Layouts'
import { ServicesStyled } from './ServicesElements'
import Title from '../../Title/Title'
import ServiceCard from './ServiceCard'
import design from '../../../assets/images/design.png'
import app from '../../../assets/images/app.png'
import responsive from '../../../assets/images/responsive.png'

function Services() {
    return (
        <InnerLayout>
            <ServicesStyled>
                <Title title={'Services'} span={'Services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={'Lorem ipsum dolor sit amet consecteur adipisicing'} />
                    <div className="mid-card">
                    <ServiceCard 
                        image={app} 
                        title={'App Development'} 
                        paragraph={'Lorem ipsum dolor sit amet consecteur adipisicing'} />
                    </div>
                    <ServiceCard 
                        image={responsive} 
                        title={'Responsive design'} 
                        paragraph={'Lorem ipsum dolor sit amet consecteur adipisicing'} />
                </div>
            </ServicesStyled>
        </InnerLayout>
    )
}

export default Services
