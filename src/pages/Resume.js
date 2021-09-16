import React from 'react'
import Skills from '../components/Skills/Skills'
import TimelineSection from '../components/TimelineSection/TimelineSection'
import { MainLayout } from '../styles/Layouts'

function Resume() {
    return (
        <MainLayout>
            <Skills />
            <TimelineSection />
        </MainLayout>
    )
}

export default Resume
