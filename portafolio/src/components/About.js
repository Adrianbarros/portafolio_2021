import React from "react";
import Intro_img from '../img/Intro_img.JPG'
// import styled from 'styled-components'
import { StyledAbout, StyledDescription, StyledHide, StyledImg } from '../styles';
//framer motion
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const AboutSection = () => {

    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2  >
                            Hello There!
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 >My name is <span>Adrian Barros</span></motion.h2>
                    </StyledHide>
                    <p>I am a reacent graduate of Computer Science looking for a job</p>
                    <button>contact me</button>
                </motion.div>
            </StyledDescription>
            <StyledImg>
                <img src={Intro_img} alt="picture of me" />
            </StyledImg>
        </StyledAbout>

    );
}


export default AboutSection;