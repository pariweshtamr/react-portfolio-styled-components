import React from 'react'
import { PrimaryButtonStyled } from './ButtonElements'

function PrimaryButton({title}) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

export default PrimaryButton
