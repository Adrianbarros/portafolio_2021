import React from "react";
import Intro_img from '../img/Intro_img.JPG'
import styled from 'styled-components'
import { StyledAbout, StyledDescription, StyledHide, StyledImg } from '../styles';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>Hello There!</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>My name is <span>Adrian Barros</span></h2>
                    </StyledHide>
                    <p>I am a reacent graduate of Computer Science looking for a job</p>
                    <button>contact me</button>
                </div>

            </StyledDescription>
            <StyledImg>
                <img src={Intro_img} alt="picture of me" />
            </StyledImg>
        </StyledAbout>

    );
}


export default AboutSection;