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
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext';
import Avatar from "../Avatar";




const Navbar = () => {
    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()

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
                {user && (
                <NavLink to="/profile" activeStyle>
                    My Profile
                </NavLink>
                )}
                {!user && (
                    <>
                <NavLink to="/signin" activeStyle>
                    Login
                </NavLink>
                <NavLink to="/signup" activeStyle>
                    Join Us
                </NavLink>
                </>
                )}
                {user && (
                <>
                <Avatar src={user.photoURL}/>
                {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                {isPending && <button className="btn" disabled>Logging out...</button>}
                </>
                )}
                
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;