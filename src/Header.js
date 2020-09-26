import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavBar from './NavBar';
import Logo from './Logo';

const Header = () => {
	return (
		<div className='header'>
			<Link to='/'>
				<Logo />
			</Link>
			<NavBar />
		</div>
	);
};

export default Header;
