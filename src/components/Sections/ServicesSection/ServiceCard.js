import React from 'react'
import {ServicesCardStyled} from './ServiceCardElements'

function ServiceCard({image, title, paragraph}) {
    return (
        <ServicesCardStyled>
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServicesCardStyled>
    )
}

export default ServiceCard
