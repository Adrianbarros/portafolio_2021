import React from "react";
import styled from 'styled-components'
import { StyledAbout, StyledDescription } from '../styles';
import { fade } from '../animation';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll'

//images
import hunter from '../img/hunter.png'
import nycct from '../img/nycct.png'
import ctp from '../img/ctp.png'
import boomi from '../img/boomi.png'
import bloomberg from '../img/bloomberg.png'


const Education = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (

        <StyledAbout>
            <StyledDescription>
                <h2><span>Education</span></h2>
                <div className="items">
                    <StyledCards variants={fade} animate={controls} initial="hidden" ref={element}>
                        <StyledCard>
                            <img src={hunter} alt='C logo' />
                            <div className="title">
                                <p><span>Bachelor's degree in Computer Science </span></p>
                            </div>
                            <p>
                                <span>Institution:</span>(CUNY) Hunter College<br />
                                <span>Graduation:</span> August 2020 <br />
                                <span>Notable Classes:</span> Computer Architecture, Web Development, Operating Systems, Database Management (SQL), Distributed Systems and Cloud Computing, Software Engineering
                            </p>

                        </StyledCard>
                        <StyledCard>
                            <img src={nycct} alt='C logo' />
                            <div className="title">
                                <p><span>Associate's degree in Computer Science </span></p>
                            </div>
                            <p>
                                <span>Institution:</span>(CUNY) City College of Technology<br />
                                <span>Graduation:</span> August 2020 <br />
                                <span>Notable Classes:</span> Data Structures and Algorithms, Computer Architecture, Object Oriented Programming(Python/C++)
                            </p>

                        </StyledCard>
                        <StyledCard>
                            <img src={ctp} alt='C logo' />
                            <div className="title">
                                <p><span>CUNY Tech Prep Bootcamp </span></p>
                            </div>
                            <p>
                                <span>Institution:</span>CUNY Tech Prep<br />
                                <span>Date of Completion:</span> May 2020 <br />
                                <span>Skills Learned:</span> Node, React, Express, PostgreSQL, MVC, version control with Git/GitHub, agile, scrum, test drivendevelopment, and CI/CD
                            </p>

                        </StyledCard>
                    </StyledCards>
                </div>
                <h2><span>Certifications</span></h2>
                <StyledCards variants={fade} animate={controls2} initial="hidden" ref={element2}>
                    <div className="cert">
                        <StyledCard>

                            <img src={boomi} alt='C logo' />
                            <div className="title">
                                <p><span>Associate Integration Developer </span></p>
                            </div>
                            <p>
                                <span>Institution:</span> Dell Boomi(IT service management company)<br />
                                <span>Date of Completion:</span> August 2020 <br />
                                <span>Description:</span> Training on SaaS integration, development life cycle, document flow, process testing and deployment using Dell Boomi
                            </p>

                        </StyledCard>
                    </div>
                    <StyledCard>
                        <img src={bloomberg} alt='C logo' />
                        <div className="title">
                            <p><span>Bloomberg Market Concepts (BMC) </span></p>
                        </div>
                        <p>
                            <span>Institution:</span> Bloomberg LP<br />
                            <span>Date of Completion:</span> January 2020 <br />
                            <span>Description:</span> Fundamental training of the financial market with modules such as equities, fixed income and usage of the Bloomberg Terminal

                            </p>

                    </StyledCard>


                </StyledCards>


            </StyledDescription>

        </StyledAbout >

    )

}
const StyledCards = styled(motion.div)`
    display: flex;
    flex-flow:  wrap;
    justify-content: center;
    .cert{
        flex-basis: 15rem;
        margin-right: 3rem;
    }

`

const StyledCard = styled.div`
    flex-basis: 15rem;
    margin-right: 1rem;
    img{
        border: 1rem;
        height: 28vh;
        width: 45vh;
        background:#fff;
        object-fit: contain;

    }
    p{
        padding: 0.4rem;
    }
    .title{
        text-decoration : underline;
    }

`

export default Education;