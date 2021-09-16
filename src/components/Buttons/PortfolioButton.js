import React from 'react'
import {PortfolioButtonStyled, ButtonsStyled} from './PortfolioButtonElements'

function PortfolioButton({filter, button}) {
    return (
        <ButtonsStyled>
            {
                button.map((btn, i) => {
                    return <PortfolioButtonStyled key={i} onClick={()=>filter(btn)}>
                        {btn}
                    </PortfolioButtonStyled>
                })
            }
        </ButtonsStyled>
    )
}

export default PortfolioButton
