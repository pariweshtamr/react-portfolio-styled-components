import React, { useState } from 'react'
import Popup from '../Popup/Popup'
import {MenuStyled} from './MenuElements'
import CloseIcon from '@material-ui/icons/Close';


function Menu({menuItem}) {

    const [isOpen, setIsOpen] = useState(false)
    const [showPop, setShowPop] = useState()
    const pop = (i) => {
        setIsOpen(!isOpen)
        setShowPop(i)
    }
    return (
        <MenuStyled>
            {
                menuItem.map((item,i)=>{
                    return  <div className="grid-item" key={item.id} onClick={()=>pop(i)}>
                        {
                            i === showPop && 
                                <Popup trigger={isOpen}>
                                <div className="portfolio-popup">
                                    <div className="pp-inner">
                                        <div className="pp-content">
                                            <div className="pp-header">
                                                <button className="bttn">
                                                    <CloseIcon />
                                                </button>                               
                                                <div className="pp-thumbnail">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <h6>{item.title}</h6>
                                            </div>
                                            <div className="pp-body">
                                                <div className="description">
                                                    <p>{item.text}</p>
                                                </div>
                                                <div className="general-info">
                                                    <ul>
                                                        <li>Created - <span>{item.created}</span></li>
                                                        <li>Technologies - <span>{item.technologies}</span></li>
                                                        <li>Role - <span>{item.role}</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Popup>
                }
                                <div className="portfolio-content">
                                    <div className="portfolio-image">
                                        <img src={item.image} alt="" />
                                    </div>
                                <h6>{item.title}</h6>
                                </div>
                            </div>
                })
            }
        </MenuStyled>
    )
}
export default Menu

