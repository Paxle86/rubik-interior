import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavBurger from './NavBurger';

const Nav = styled.nav`
	width: 100%;
	height: 90px;
	/* border-bottom: 2px solid #718093; */
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
`;

const NavBar = () => {
	return (
		<Nav>
			<Logo />
			<NavBurger />
		</Nav>
	);
};

export default NavBar;
