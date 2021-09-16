import React from 'react'
import Navigation from '../Navigation/Navigation'
import {SidebarStyled} from './SidebarElements'
function Sidebar({navToggle}) {
    return (
        <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation />
        </SidebarStyled>
    )
}


export default Sidebar
