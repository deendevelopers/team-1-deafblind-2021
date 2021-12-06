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
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import AvatarPro from "../AvatarPro";
import { Box, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <>
      <Nav>
        <NavLogo to="/">
          <Image src={logo} alt="Logo" h={10} />
        </NavLogo>

        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/findvolunteers" activeStyle>
            Find Volunteers
          </NavLink>
          {/* <NavLink to="/about" activeStyle>
            About
          </NavLink> */}
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
              <AvatarPro src={user.photoURL} />
              {!isPending && (
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              )}
              {isPending && (
                <button className="btn" disabled>
                  Logging out...
                </button>
              )}
            </>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
