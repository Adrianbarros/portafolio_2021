import React from 'react';
import styled from 'styled-components'
import UNICEF from '../img/UNICEF.png'

const WorkExp = () => {
    return (
        <Work>
            <h2> Experience </h2>
            <div className="line"></div>
            <StyledCards>
                <img src={UNICEF} alt="UNICEF logo" />
            </StyledCards>

        </Work>
    )
}

const Work = styled.div`
    padding-bottom: 10rem;
    .line{
        height:0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        height: 40vh;
        width: 50vh;
        object-fit: contain;

    }
`;
const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
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

export default WorkExp;

