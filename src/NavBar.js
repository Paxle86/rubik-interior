import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	return (
		<div className='navbar'>
			<ul className='navbar__list'>
				<li>
					<Link to='/'>Trang chủ</Link>
				</li>
				<li>
					<Link to='/products'>Sản phẩm</Link>
				</li>
				<li>
					<Link to='/about'>Giới thiệu</Link>
				</li>
				<li>
					<Link to='/contact'>Liên hệ</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
