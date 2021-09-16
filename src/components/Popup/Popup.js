import React from 'react'
import { PopupStyled } from './PopupElements'

function Popup(props) {
    return (props.trigger) ? (
        <PopupStyled>
                    {props.children}
        </PopupStyled>
    ) : "";
}
export default Popup