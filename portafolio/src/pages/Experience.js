import React from 'react';
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import styled from 'styled-components'
import WorkExp from '../components/Work';
const Experience = () => {
    return (
        <Exp exit="exit" variants={pageAnimation} initial='hidden' animate='show'>
            <WorkExp />
        </Exp>
    )
}
const Exp = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background: white;
`;

export default Experience;