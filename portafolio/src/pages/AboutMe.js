import React from 'react'
import AboutSection from '../components/About'
import ExpSection from '../components/Experience'
import SkillsSection from '../components/Skills'

import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
const AboutMe = () => {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show'>
            <AboutSection />
            <SkillsSection />
            <ExpSection />
        </motion.div>
    )
}
export default AboutMe