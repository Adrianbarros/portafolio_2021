import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <Link id='logo' to='/'>Adrian Barros </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>About Me</Link>
                </li>
                <li>
                    <Link to='/experience'>My Expirence</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Me</Link>
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

export default Nav;