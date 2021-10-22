import React from 'react';
import styled from 'styled-components'
//
import noaa from '../img/noaa.png'
import rf from '../img/rf.png'
import nycct from '../img/nycct.png'
import cunySPH from '../img/cunySPH.png'
import DFG from '../img/DFG.jpeg'
import tracFlo from '../img/tracFlo.png'
//
import { fade, photoAnim, lineAnim, scrollReveal } from '../animation'
import { motion } from 'framer-motion';
import { useScroll } from './useScroll'



const WorkExp = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();
    return (

        <Work>
            <motion.h2 variants={fade} className='title'> <span>Experience</span> </motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <motion.div variants={fade}>
                <StyledCards>
                    <StyledCard >
                        <motion.img variants={photoAnim} src={tracFlo} alt="TracFlo logo" />
                        <div className="Content">
                            <h3> Intern, Software Engineer / Software Engineer by Contract</h3>
                            <h4><span>TracFlo</span> 07/2021-10/2021 </h4>
                            <p>
                                Working in a fast-paced agile environment as part of a construction technology startup. Contributing member of the development team providing input utilized throughout the product development cycle.
                                Writes production-level code to help rebuild the TracFlo application by creating a component-driven web client with React.js and Redux increasing the performance by upwards of 200% and doubling the rate of weekly commits.
                                Prototyped TracFlow’s first mobile app using React Native (iOS & Android) which is projected to grow usage over 80%.

                            </p>
                        </div>
                    </StyledCard>
                    <StyledCard >
                        <div className="Content">
                            <h3>Freelance Software Enginner</h3>
                            <h4><span>CUNY Graduate School of Public Health (CUNY SPH) </span> 06/2021-08/2021 </h4>
                            <p>
                                Provides knowledge and expertise of web development to help develop and improve the CUNY Big Shots website, which highlights community members’ impact during the COVID-19 pandemic.
                                Maintains and enhances Squarespace website using HTML, CSS, and JavaScript to create new features and pages.
                                Coaches non-technical teammates in Squarespace best practices to provide stable site updates in the future.

                            </p>
                        </div>
                        <motion.img variants={photoAnim} src={cunySPH} alt="CUNY SPH logo" />
                    </StyledCard>
                    <StyledCard >
                        <motion.img variants={photoAnim} src={DFG} alt="Develop for good logo" />
                        <div className="Content">
                            <h3>Back-End Developer</h3>
                            <h4><span>Develop for Good</span> 01/2021-05/2021 </h4>
                            <p>Worked alongside the UNICEF development team to create an application to inform people around the world about global issues and help optimize the application for devices which are unavailable to load Javascript.
                                Created a Django/Wagtail server with a Postgres database to improve service performance with server side rendering, built custom APIs, managed data migrations and successfully backup all the data into various databases such as Firebase and Postgres.
                                Worked in an Agile environment with constant unit testing and improvement as well as refactoring of an existing PHP server
                            </p>
                        </div>
                    </StyledCard>
                    <StyledCard variants={scrollReveal} animate={controls} initial="hidden" ref={element} >

                        <div className="Content">
                            <h3>Research / Data Science Intern</h3>
                            <h4><span>NOAA CREST</span> 06/2018-05/2019 </h4>
                            <p>Trained on collection of satellite data, optics, and MATLAB coding with a concentration on matrices and data frames.
                                Constructed graphs with the use of the Python coding language, such as heat-maps, box graphs, isomaps, or multidimensional graphs.
                                Independent research on the geoscience field with the help of a mentor and took the responsibility to mentor a high school student.

                            </p>
                        </div>
                        <motion.img variants={photoAnim} src={noaa} alt="NOAA logo" />
                    </StyledCard>
                    <StyledCard variants={scrollReveal} animate={controls2} initial="hidden" ref={element2}>
                        <motion.img variants={photoAnim} src={rf} alt="research foundation logo" />
                        <div className="Content">
                            <h3>Research Student</h3>
                            <h4><span>CUNY Research Foundation</span> 11/2017-05/2018 </h4>
                            <p>Gathered and analyzed temperature, ground state, and energy data in order to detect freezing trends in the area inspected.
                                Optimized data collection methodology of low altitude satellites by mathematically comparing it with high altitude satellites.
                                Created logical algorithms to facilitate the assembly of data used in studies throughout the project.
                            </p>
                        </div>

                    </StyledCard>
                    <StyledCard StyledCard variants={scrollReveal} animate={controls3} initial="hidden" ref={element3}>

                        <div className="Content">
                            <h3>Peer Leader/ Tutor</h3>
                            <h4><span>City College of Technology</span> 01/2018-05/2018 </h4>
                            <p> Served as a tutor meeting with the class going over the content the proffessor was able to and unable to teach.
                                Managed the attendance and grading using excel.
                                And conducting surveys and polls to gather data for the CUNY reseach foundation to improve math classes.
                            </p>
                        </div>
                        <motion.img variants={photoAnim} src={nycct} alt="research foundation logo" />
                    </StyledCard>
                </StyledCards>
            </motion.div>
        </Work>
    )
}


const Work = styled.div`
    padding-bottom: 10rem;
    .line{
        height:0.5rem;
        background: #D96ED4;
        margin-bottom: 3rem;
    }
`;
const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledCard = styled(motion.div)`
    align-items: center;
    display:flex;
    flex-basis: 100%;
    box-shadow: 0 4px 8px 0 #DCDCDC;
    border-radius: 5px;
    img{
        background: #ffffff;
        margin: 1rem;
        height: 40vh;
        width: 50vh;
        object-fit: contain;
    
    }

    h3{
        color: white;
        text-decoration : underline;
        margin-left: 1rem;
        padding-top: 1rem;
    }
    h4{
        color: white;
        margin-left: 1rem;
        padding-top: 0.5rem;
    }
    p{
        font-size: 1.1rem;
        color:	#ffffff;
        padding-top: .5rem;
        margin-left: 1rem;
    }
    
`


export default WorkExp;

