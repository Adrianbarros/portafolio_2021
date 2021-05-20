import React from "react";

import styled from 'styled-components'
import { StyledAbout, StyledDescription } from '../styles';
import { fade } from '../animation';
import { useScroll } from './useScroll'

import py_logo from '../img/py_logo.svg'
import js_logo from '../img/js_logo.svg'
import c_logo from '../img/c_logo.svg'
const SkillsSection = () => {
    const [element, controls] = useScroll();
    return (
        <StyledSkills variants={fade} animate={controls} initial="hidden" ref={element}>
            <StyledDescription>
                <h2>My <span>Favorites</span> programming languages</h2>
                <StyledCards>
                    <StyledCard>
                        <div className='icon'>
                            <img src={py_logo} alt='python logo' />
                            <h3>Python</h3>
                        </div>
                        <p>
                            I have been using this language for around 4 years now and to this day is my go to language.
                            I have used it alongside <span>Django</span> and <span>Flask</span> frameworks to build the server-side of many applications and websites.
                            I also have used it for data science with library such as <span>Pandas</span> and <span>Numpy</span> between others.
                        </p>
                    </StyledCard>
                    <StyledCard>
                        <div className='icon'>
                            <img src={js_logo} alt='JavaScript logo' />
                            <h3>JavaScript</h3>
                        </div>
                        <p>
                            Even though I have not been using JS as long as my other languages it has now become very prevalent for me, <span>look around, this is what I can do with it!</span>.
                            The main framework I use is <span>Node.js</span> with libraries like <span>React</span> for the front-end and <span>Express</span> in the back-end.
                        </p>
                    </StyledCard>
                    <StyledCard>
                        <div className='icon'>
                            <img src={c_logo} alt='C logo' />
                            <h3>C++</h3>
                        </div>
                        <p>
                            The language that started it all, it has been more than 5 years when I decided to persue Computer Science. I started leaning this language before my college classes started.
                           For better or worst this language is the one who introduce me to <span>Data Structures and Algorithms</span>.
                        </p>
                    </StyledCard>


                </StyledCards>
                <h2>All my <span>Skills</span></h2>
            </StyledDescription>

        </StyledSkills>

    )
}

const StyledSkills = styled(StyledAbout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 100% auto ;
        padding: 2rem 1rem 4rem 1rem;
    }


`
const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px){
        justify-content: center;
    }
`

const StyledCard = styled.div`
    flex-basis: 30rem;
    .icon{
        display:flex;
        align-items : center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`
export default SkillsSection;