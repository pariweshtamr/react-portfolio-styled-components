import React from 'react'
import {NavigationStyled} from'./NavigationElements'
import {NavLink} from 'react-router-dom'
import avatar from '../../assets/images/3.JPG'
function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="mini-display-pic" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" activeClassName="active-class" exact>Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 My Portfolio Website</p>
            </footer>
        </NavigationStyled>
    )
}

export default Navigation
