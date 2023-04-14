import React from 'react'
import{FaBars} from 'react-icons/fa'
import { Nav, 
  NavLogo, 
  NavBarContainer, 
  MobileIcon, 
  NavItem, 
  NavMenu,
  NavLink, 
  NavBtn,
  NavBtnLink
} from './Nav'


const Navbar = () => {
  return (
    <>
    <Nav>
      <NavBarContainer>
        <NavLogo to='/'>212</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to='/'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/aboutUs'>About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/meetTheTeam">Meet The Team</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/FAQs">FAQs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/tips">Tips</NavLink>
          </NavItem>
          <NavBtn>
            <NavBtnLink to="/LogIn">Log in</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </NavBarContainer>
    </Nav>
    </>
  );
};

export default Navbar;