import React from 'react'
import { TimelineContentStyled } from './TimelineContentElements'

function TimelineContent({year, title, subTitle, recognition, text, text2}) {
    return (
        <TimelineContentStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <h6>{recognition}</h6>
                <p>{text}</p>
                <p>{text2}</p>
            </div>
        </TimelineContentStyled>
    )
}

export default TimelineContent
