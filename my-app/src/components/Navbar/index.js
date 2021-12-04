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
                <NavLink to="/findvolunteers" activeStyle>
                    Find Volunteers
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
                <NavLink to="/signup" activeStyle>
                    Sign Up
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;