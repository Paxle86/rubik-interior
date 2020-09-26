import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import TwitterIconTabs from './TwitterIconTabs';

import Logo from './Logo';

const Header = () => {
	return (
		<div>
			<Link to='/'>
				<Logo />
			</Link>
			<TwitterIconTabs />
		</div>
	);
};

export default Header;
