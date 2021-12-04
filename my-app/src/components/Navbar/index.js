import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                App Name
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/profile" activeStyle>
                    My Profile
                </NavLink>
                <NavLink to="/signin" activeStyle>
                    Sign In
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up" activeStyle>Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;