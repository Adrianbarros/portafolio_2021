import React from "react";

import styled from 'styled-components'
import { StyledAbout, StyledDescription } from '../styles';
import { fade } from '../animation';
import { useScroll } from './useScroll'
import { Grid, Paper } from "@material-ui/core"

const SkillBlock = (skill) => {
    return (
        <Grid item xs='4'>
            <StyledCards>
                <StyledCard style={{ justifyContent: "center" }}>

                    <h3>{skill.skill.name}</h3>

                </StyledCard>

            </StyledCards>
        </Grid >
    )
}
const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1300px){
        justify-content: center;
    }
`

const StyledCard = styled.div`
    flex-basis: 30rem;
    padding-bottom: 2rem;

    h3{
            margin-left: 2rem;
            color: #23d997;
            background: white;
            padding: 1rem;
            border-radius: 25px;
            padding-left: 9rem;
            @media (max-width: 1300px){
            padding-left: 0rem;
        }
        }
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


export default SkillBlock;