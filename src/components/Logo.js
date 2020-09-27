import React from 'react';
import { motion } from 'framer-motion';

import styled from 'styled-components';

const logoVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 3,
			ease: 'easeInOut',
		},
	},
};
const divVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,

		transition: {
			duration: 3,
			ease: 'easeInOut',
		},
	},
};
const LogoStyle = styled.div`
	h1 {
		color: #0097e6;
		margin-top: 60px;
		margin-left: 80px;
	}
	#Layer_1 {
		position: absolute;
		display: inline-block;
		max-width: 80px;
		top: 10px;
		left: 10px;
		width: 100%;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 20px;
			margin-top: 30px;
			margin-left: 50px;
		}
		#Layer_1 {
			display: inline-block;
			max-width: 40px;
			top: 10px;
			left: 10px;
			width: 100%;
		}
	} ;
`;

const Logo = () => {
	return (
		<>
			<LogoStyle>
				<motion.svg
					variants={logoVariants}
					initial='hidden'
					animate='visible'
					id='Layer_1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 408.88 409'
				>
					<path
						className='cls-1'
						fill='#718093'
						d='M141.14,426.41a179,179,0,0,1,354.74-33.75c-3.56-109.83-93.69-197.77-204.38-197.77C178.56,194.89,87,286.45,87,399.39s91.56,204.5,204.5,204.5c1.68,0,3.36,0,5-.06C208.84,592.28,141.14,517.26,141.14,426.41Z'
						transform='translate(-87 -194.89)'
					/>
					<path
						className='cls-2'
						fill='#0097e6'
						d='M200.57,467.93A143.39,143.39,0,0,1,452.3,374,138,138,0,1,0,202.51,491.52,144.42,144.42,0,0,1,200.57,467.93Z'
						transform='translate(-87 -194.89)'
					/>
					<path
						className='cls-2'
						fill='#0097e6'
						d='M398.76,520.09c-2.56,0-4.72-.2-7.28-.4-14.35-1-22-4.72-30.67-16.91-7.28-10-14.36-22.41-20.65-32.44-3.93-6.29-6.49-7.47-16.51-7.47h-6.89v30.87c0,16.71,2.17,17.69,17.9,19.27v5.5h-52.5V513c16.32-1.77,17.69-2.56,17.69-19.27V415.29c0-16.72-2.16-17.31-17.69-19.08v-5.5H332.3c14.35,0,24,1.77,31.46,6.68,8.06,5.11,13.37,14,13.37,26,0,16.91-10.82,27.52-25.37,33.82,3.54,6.09,12,19.26,17.9,28.11,7.27,10.42,11,15.34,15.53,20.26,5.31,5.7,9.83,7.86,14.35,9ZM326.2,456.18c10.23,0,16.72-1.57,21.63-5.7,7.67-5.7,10.81-13.57,10.81-24.18,0-21-14-28.71-29.1-28.71-5.7,0-9,.79-10.42,2-1.77,1.37-2.36,3.34-2.36,8.45v48.17Z'
						transform='translate(-87 -194.89)'
					/>
				</motion.svg>
				<motion.div variants={divVariants} initial='hidden' animate='visible'>
					<h1>Rubik Interior</h1>
				</motion.div>
			</LogoStyle>
		</>
	);
};

export default Logo;