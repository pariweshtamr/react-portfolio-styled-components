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
                </InnerLayout>
        </TimelineStyled>          
    )
}

export default TimelineSection
