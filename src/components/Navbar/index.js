import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavItem,
	NavMenu,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from './NavbarElement'

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='home'>Rubik</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to='home'>Home</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='about'>About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='works'>Works</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='contact'>Contact</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to='/contact'>Contact Us</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
