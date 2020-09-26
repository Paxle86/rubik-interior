import React, { useState } from 'react';
import styled from 'styled-components';
import NavRight from './NavRight';

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 15px;
	right: 20px;
	display: none;
	cursor: pointer;
	z-index: 10;

	display: flex;
	justify-content: space-around;
	flex-flow: column nowrap;

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? '#f1f1f1' : '#0097E6')};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s ease-in-out;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}
		&:nth-child(2) {
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

const NavBurger = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<NavRight open={open} />
		</>
	);
};

export default NavBurger;
