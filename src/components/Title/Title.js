import React from 'react'
import { TitleStyled } from './TitleElements'

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    )
}

export default Title
