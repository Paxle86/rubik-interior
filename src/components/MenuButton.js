import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
	p {
		text-transform: uppercase;
		position: fixed;
		top: 50px;
		right: -25px;
		transform: translate(-50%, -50%);
		color: #0097e6;
		background: white;
		padding: 10px 20px;
		font-size: 15px;
		font-weight: bold;
		letter-spacing: 2px;
		overflow: hidden;

		@keyframes animateRight {
			0% {
				transform: translateX(-100%);
			}
			100% {
				transform: translateX(100%);
			}
		}
		@keyframes animateDown {
			0% {
				transform: translateY(-100%);
			}
			100% {
				transform: translateY(100%);
			}
		}
		@keyframes animateLeft {
			0% {
				transform: translateX(100%);
			}
			100% {
				transform: translateX(-100%);
			}
		}
		@keyframes animateUp {
			0% {
				transform: translateY(100%);
			}
			100% {
				transform: translateY(-100%);
			}
		}
		span:nth-child(1) {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background: linear-gradient(to right, #fff, #0097e6);
			animation: animateRight 2s linear infinite;
		}
		span:nth-child(2) {
			position: absolute;
			top: 0;
			right: 0;
			width: 2px;
			height: 100%;
			background: linear-gradient(to bottom, #fff, #0097e6);
			animation: animateDown 2s linear infinite;
			animation-delay: 1s;
		}
		span:nth-child(3) {
			position: absolute;
			bottom: 0;
			right: 0;
			width: 100%;
			height: 2px;
			background: linear-gradient(to left, #fff, #0097e6);
			animation: animateLeft 2s linear infinite;
		}
		span:nth-child(4) {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 2px;
			height: 100%;
			background: linear-gradient(to top, #fff, #0097e6);
			animation: animateUp 2s linear infinite;
			animation-delay: 1s;
		}
		&:hover {
			cursor: pointer;
			background: #0097e6;
			color: white;
			span {
				display: none;
			}
		}
	}

	@media (max-width: 768px) {
		p {
			font-size: 10px;
			padding: 8px 16px;
			top: 30px;
			right: -30px;
		}
	}
`;
const MenuButton = () => {
	return (
		<StyledNav>
			<p>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Menu
			</p>
		</StyledNav>
	);
};

export default MenuButton;
