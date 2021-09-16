import React from 'react'
import { SkillsStyled } from './SkillsElements'
import { InnerLayout } from '../../styles/Layouts'
import Title from '../Title/Title'
import ProgressBar from '../ProgressBar/ProgressBar'

function Skills() {
    return (
        <SkillsStyled>
                <Title title={'My Skills'} span={'My Skills'}/>
                    <InnerLayout>
                        <div className="skills">
                            <ProgressBar 
                            title={'HTML5'}
                            width={'80%'}
                            text={'80%'}
                            />
                            <ProgressBar 
                            title={'CSS3'}
                            width={'90%'}
                            text={'90%'}
                            />
                            <ProgressBar 
                            title={'Javascript'}
                            width={'60%'}
                            text={'60%'}
                            />
                            <ProgressBar 
                            title={'React JS'}
                            width={'60%'}
                            text={'60%'}
                            />
                            <ProgressBar 
                            title={'Node-JS'}
                            width={'50%'}
                            text={'50%'}
                            />
                            <ProgressBar 
                            title={'Problem-Solving'}
                            width={'85%'}
                            text={'85%'}
                            />
                        </div>
                    </InnerLayout>
        </SkillsStyled>
    )
}

export default Skills
