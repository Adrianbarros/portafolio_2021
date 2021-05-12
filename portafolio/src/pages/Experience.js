import React from 'react';
import { motion } from 'framer-motion'
import { pageAnimation, sliderAnim, sliderContainer } from '../animation'
import styled from 'styled-components'
import WorkExp from '../components/Work';
import ScrollTop from '../components/ScrollTop';

const Experience = () => {
    return (
        <Exp exit="exit" variants={pageAnimation} initial='hidden' animate='show'>

            <motion.div variants={sliderContainer}>
                <Frame1 variants={sliderAnim} />
                <Frame2 variants={sliderAnim} />
                <Frame3 variants={sliderAnim} />
                <Frame4 variants={sliderAnim} />
            </motion.div>
            <WorkExp />
            <ScrollTop />
        </Exp>
    )
}
const Exp = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
`;
//frame animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 8%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`

export default Experience;