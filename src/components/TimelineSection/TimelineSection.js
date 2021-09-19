import React from 'react'
import { InnerLayout } from '../../styles/Layouts'
import SmallTitle from '../Title/SmallTitle'
import Title from '../Title/Title'
import { TimelineStyled } from './TimelineElements'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import TimelineContent from './TimelineContent'


function TimelineSection() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <TimelineStyled>
            <Title title={'Resume'} span={'Resume'} />
                <InnerLayout>
                    <div className="small-title">
                    <SmallTitle icon={school} title={'Education'}/>
                    </div>
                    <div className="timeline-content">
                        <TimelineContent 
                            year={'2021'} 
                            title={'Full Stack Developer Course'}
                            subTitle={'Dented Code Academy'}    
                            text={''}
                        />
                        <TimelineContent 
                            year={'2019 - 2021'} 
                            title={'Master of Applied Information Technology'}
                            subTitle={'Victoria University'}    
                            text={'Award: First Year Course Champion'}
                        />
                        <TimelineContent 
                            year={'2014 - 2017'} 
                            title={'Bachelor of Commerce'}
                            subTitle={'Australian Catholic University'}    
                            text={"Award: Executive Dean's List"}
                        />
                    </div>
                    <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Experience'}/>
                    </div>
                    <div className="timeline-content">
                        <TimelineContent 
                            year={'2018 - Present'} 
                            title={'Aldi Australia'}
                            subTitle={'Deputy Manager'}    
                            text={'o Demonstrated effective management skills by prioritising tasks effectively to consistently meet deadlines'}
                            text2={'o Displayed honesty and accuracy while operating cash registers and handling the safe'}
                        />
                        <TimelineContent 
                            year={'2015 - 2018'} 
                            title={'Aldi Australia'}
                            subTitle={'Retail Assitant'}    
                            recognition={'Award: Employee of the Week'}
                            text={"o Worked effectively within a team environment by collaborating with up to 5 colleagues to complete daily tasks and maintain store standards for smooth operation"}
                            text2={"o Demonstrated strong customer service skills through responding to product related queries and meeting the needs of more than 100 customers daily"}
                        />
                        <TimelineContent 
                            year={'2014 - 2017'} 
                            title={"McDonald's"}
                            subTitle={'Team Member'}    
                            text={"o Demonstrated good organisational skills by ensuring proper management of stock on a weekly basis"}
                            text2={"o Demonstrated effective teamwork by cross training with existing and new crew members to ensure the delivery of seamless service at all times"}
                        />
                    </div>
                </InnerLayout>
        </TimelineStyled>          
    )
}

export default TimelineSection
