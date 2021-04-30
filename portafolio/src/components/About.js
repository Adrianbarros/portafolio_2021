import React from "react";
import Intro_img from '../img/Intro_img.JPG'
import styled from 'styled-components'
const AboutSection = () => {
    return (
        <StyleAbout>
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
        </StyleAbout>

    )
}

//styled components
const StyleAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`
const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }


`
const StyledImg = styled.div`
    flex: 1;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }

`
const StyledHide = styled.div`
    overflow: hidden;

`

export default AboutSection;