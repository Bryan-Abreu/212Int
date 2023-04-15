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
  NavBtnLink,
} from './Nav'
import Logo from '../../images/212 International.png'


const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
      <NavBarContainer>
        <NavLogo to='/' src={Logo}/>
        <MobileIcon onClick={toggle}>
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
        </NavMenu>
          <NavBtn>
            <NavBtnLink to="/LogIn">Log in</NavBtnLink>
          </NavBtn>
      </NavBarContainer>
    </Nav>
    </>
  );
};

export default Navbar;