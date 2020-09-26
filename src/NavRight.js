import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
	display: flex;
	flex-flow: column nowrap;

	background-color: black;
	opacity: 0.7;
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	width: 30vw;
	padding-top: 3rem;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
	transition: transform 0.3s ease-in-out;
	align-items: center;
	justify-content: space-around;
	margin-bottom: -3em;

	li {
		display: block;
		color: white;
		text-transform: uppercase;
		margin: 0 0 -13px;
		padding: 13px 0 0;
		font-size: 3rem;
		font-family: 'Bebas Neue, cursive';
		transition: all 0.3s ease-in-out;
		&:hover {
			color: #0097e6;
		}
	}
	@media (max-width: 1080px) {
		flex-flow: column nowrap;
		background-color: black;
		opacity: 0.7;
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 40vw;
		padding-top: 3.5rem;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		transition: transform 0.3s ease-in-out;

		li {
			color: white;
			text-transform: uppercase;
			font-size: 2rem;
			transition: all 0.3s ease-in-out;
			&:hover {
				color: #0097e6;
			}
		}
	}

	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: black;
		opacity: 0.7;
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 100vw;
		padding-top: 3.5rem;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		transition: transform 0.3s ease-in-out;

		li {
			color: white;
			text-transform: uppercase;
			font-size: 2rem;
			transition: all 0.3s ease-in-out;
			&:hover {
				color: #0097e6;
			}
		}
	}
`;

const NavRight = ({ open }) => {
	return (
		<Ul open={open}>
			<li>Trang chủ</li>
			<li>Các dự án</li>
			<li>Khách hàng</li>
			<li>Giới thiệu</li>
			<li>Liên hệ</li>
		</Ul>
	);
};

export default NavRight;
