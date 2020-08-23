import React from 'react'
import styled from 'styled-components';

const NavContainer= styled.div``;
const NavLogo= styled.img`
height:25px;
width:80px;
padding: 3px;
padding-top: 6px;
`;

const Nav = () => {
    return (
        <NavContainer>
            <NavLogo src="https://fontmeme.com/permalink/200823/d7fa46218581e004139f5ad9298e915d.png" alt="netflix-font" border="0"/>
            
        </NavContainer>
    )
}
export default Nav;