import React, {useEffect, useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtnLink,
    NavItemBtn
} from "./Navbar.elements";
import {IconContext} from "react-icons/lib";
import {Button} from "../../globalStyles";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton = ()=>{
        if(window.innerWidth<=960){
            setButton(false)}
        else {
            setButton(true)
        }
        };

    useEffect(()=>{
        showButton();
    },[]);

window.addEventListener('resize',showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
         <Nav>
         <NavbarContainer>
             <NavLogo to='/' onClick={closeMobileMenu}>
         <NavIcon />
        wow
         </NavLogo>
        <MenuIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <NavMenu onClick={handleClick} click={click}>
         <NavItem>
        <NavLinks to='/' onClick={closeMobileMenu}>Home </NavLinks>
        </NavItem>
        <NavItem>
        <NavLinks to='/business' onClick={closeMobileMenu}>for Business</NavLinks></NavItem>
        <NavItemBtn>
    {button ? (
            <NavBtnLink to='/sign-up'>
            <Button primary>SIGN UP</Button>
    </NavBtnLink>
) : (
    <NavBtnLink to='/sign-up'>
        <Button onClick={closeMobileMenu} fontBig primary>
    SIGN UP
    </Button>
    </NavBtnLink>
)}
    </NavItemBtn>
    </NavMenu>
         </NavbarContainer>
         </Nav>
         </IconContext.Provider>
        </>
    )
}

export default Navbar