import React from 'react'
import { Route, Switch as Switching } from 'react-router-dom'
import Main from '../components/MainContent/Main'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
import {HomeContentStyled} from './PagesElements/HomeElements'

function Home() {
   
    return (
        <HomeContentStyled>
            <Switching>
                <Route path="/" exact>
                <Main />
                </Route>
                <Route path="/about" exact>
                <About />
                </Route>
                <Route path="/resume" exact>
                <Resume />
                </Route>
                <Route path="/portfolio" exact>
                <Portfolio />
                </Route>
                <Route path="/contact" exact>
                <Contact />
                </Route>
            </Switching>

        </HomeContentStyled>
    )
}

export default Home

