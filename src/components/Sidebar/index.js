import React from 'react'
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarLink,
	SidebarBtnWrap,
	SidebarRoute,
	SidebarMenu,
} from './SidebarElement'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='home' onClick={toggle}>
						Home
					</SidebarLink>
					<SidebarLink to='about' onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to='works' onClick={toggle}>
						Works
					</SidebarLink>
					<SidebarLink to='contact' onClick={toggle}>
						Contact
					</SidebarLink>
				</SidebarMenu>
				<SidebarBtnWrap>
					<SidebarRoute to='/signin' onClick={toggle}>
						Sign In
					</SidebarRoute>
				</SidebarBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar
