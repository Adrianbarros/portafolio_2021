import React from "react";
import Intro_img from '../img/Intro_img.JPG'
// import styled from 'styled-components'
import { StyledAbout, StyledDescription, StyledHide, StyledImg } from '../styles';
//framer motion
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from '../animation'
import Wave from './Wave'

const AboutSection = () => {

    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2 variants={titleAnim} >
                            Hello There!
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim} >My name is <span>Adrian Barros</span></motion.h2>
                    </StyledHide>
                    <motion.p variants={fade}>I am a reacent graduate of Computer Science looking for a job</motion.p>
                    <motion.button variants={fade}>contact me</motion.button>
                </motion.div>
            </StyledDescription>
            <StyledImg>
                <motion.img variants={photoAnim} initial='hidden' animate='show' src={Intro_img} alt="picture of me" />
            </StyledImg>
            <Wave />
        </StyledAbout>

    );
}


export default AboutSection;