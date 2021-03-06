import React from 'react'
import AboutSection from '../components/About'
import SkillsSection from '../components/Skills'
import Education from '../components/Education'
import ScrollTop from '../components/ScrollTop';

import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
const AboutMe = () => {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit="exit">
            <ScrollTop />
            <AboutSection />
            <Education />
            <SkillsSection />
        </motion.div>
    )
}
export default AboutMe