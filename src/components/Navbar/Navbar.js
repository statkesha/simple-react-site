import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIcon,
    NavMenu,
    NavItem,
    NavLinks
} from "./Navbar.elements";
import { Container } from '../../globalStyles';
import {IconContext} from "react-icons/lib";


const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
        <NavIcon />
        wow
        </NavLogo>
        <MenuIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <NavMenu onClick={handleClick} click={click}>
        <NavItem>
        <NavLinks to='/'>Home</NavLinks>
        </NavItem>
        <NavItem>
        <NavLinks to='/business'>for Business</NavLinks></NavItem>
        </NavMenu>
        </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar