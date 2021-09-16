import React, {useState} from 'react'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../components/Title/Title'
import portfolios from '../data/PortfolioData'
import Menu from '../components/Menu/Menu'
import PortfolioButton from '../components/Buttons/PortfolioButton'

const allButtons = ['All', ...new Set(portfolios.map(item=>item.category))]

function Portfolio() {
    const [menuItem, setMenuItem] = useState(portfolios)
    const [button, setButton] = useState(allButtons)

    const filter=(button)=> {

        if(button === 'All'){
            setMenuItem(portfolios)
            return
        }

        const filteredData = portfolios.filter(item => item.category === button)
        setMenuItem(filteredData)
    }
    return (
        <MainLayout>
            <Title title={'Portfolio'} span={'Portfolio'} />
            <InnerLayout>
                <PortfolioButton filter={filter} button={button}/>
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}
export default Portfolio
