
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledAbout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`
export const StyledDescription = styled(motion.div)`
    flex: 1;
    padding-right: 3rem;
    h2{
        font-weight: lighter;
    }


`
export const StyledImg = styled.div`
    flex: 1;
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

`
export const StyledHide = styled.div`
    overflow: hidden;

`