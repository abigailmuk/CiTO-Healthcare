import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="/nurses" onClick={toggle}>Nurses</SidebarLink>
                <SidebarLink to="/carehomes" onClick={toggle}>Care Homes</SidebarLink>
                <SidebarLink to="/news" onClick={toggle}>News</SidebarLink>
                <SidebarLink to="/register" onClick={toggle}>Register</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/login" onClick={toggle}>Log In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>

    </SidebarContainer>
    
    </>
  )
}

export default Sidebar