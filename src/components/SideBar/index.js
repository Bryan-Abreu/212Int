import React from 'react'
import { SidebarContainer,
    Icon, 
    CloseIcon,
    SidbarWrapper,
    SidebarMenu,
    SidebarLink, 
    SideBtnWrap,
    SidebarRoute,
} from './SideBar'

const Sidebar
 = ( {isOpen, toggle} ) => {
  return (
   <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon />
    </Icon>
    <SidbarWrapper>
        <SidebarMenu>
            <SidebarLink to='/'>Home</SidebarLink>        
            <SidebarLink to='/aboutUs'>About</SidebarLink>          
            <SidebarLink to='/meetTheTeam'>Meet The Team</SidebarLink>                           
            <SidebarLink to='/FAQs'>FAQs</SidebarLink>           
            <SidebarLink to='/tips'>Tips</SidebarLink> 
            <SidebarLink to='/register'>Register</SidebarLink>                               
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/LogIn'>Log in</SidebarRoute>
        </SideBtnWrap>
    </SidbarWrapper>
   </SidebarContainer>
  );
};

export default Sidebar
