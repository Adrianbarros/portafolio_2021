import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';


const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1>
                <Link id='logo' to='/'>Adrian Barros </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>About Me</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/" ? "50%" : "0%" }} />
                </li>
                <li>
                    <Link to='/experience'>My Expirence</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/experience" ? "50%" : "0%" }} />
                </li>
                <li>
                    <Link to='/contact'>Contact Me</Link>
                    <Line transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/contact" ? "50%" : "0%" }} />
                </li>
            </ul>
        </StyledNav>
    )
}
const StyledNav = styled.nav`
    min-height: 5vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top:0;
    z-index: 2;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.75rem;
        font-family: "lobster";
        font-weight: lighter;

    }
    li{
        padding-left: 10rem;
        position: relative;
    }



`
const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media ( max-width: 1300px){
        left: 0%;
    }
`

export default Nav;