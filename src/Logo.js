import React from 'react';
import { motion } from 'framer-motion';
import './Logo.css';

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 3,
			ease: 'easeInOut',
		},
	},
};
const pathVariants2 = {
	hidden: {
		opacity: 0,
		pathLength: 0,
		translateX: '-100%',
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		translateX: '0%',
		transition: {
			duration: 2,
			ease: 'easeInOut',
		},
	},
};

const Logo = () => {
	return (
		<div className='logo'>
			<motion.svg
				variants={pathVariants}
				initial='hidden'
				animate='visible'
				id='Layer_1'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 408.88 409'
			>
				<motion.path
					class='cls-1'
					fill='#718093'
					d='M141.14,426.41a179,179,0,0,1,354.74-33.75c-3.56-109.83-93.69-197.77-204.38-197.77C178.56,194.89,87,286.45,87,399.39s91.56,204.5,204.5,204.5c1.68,0,3.36,0,5-.06C208.84,592.28,141.14,517.26,141.14,426.41Z'
					transform='translate(-87 -194.89)'
				/>
				<motion.path
					class='cls-2'
					fill='#0097e6'
					d='M200.57,467.93A143.39,143.39,0,0,1,452.3,374,138,138,0,1,0,202.51,491.52,144.42,144.42,0,0,1,200.57,467.93Z'
					transform='translate(-87 -194.89)'
				/>
				<motion.path
					class='cls-2'
					fill='#0097e6'
					d='M398.76,520.09c-2.56,0-4.72-.2-7.28-.4-14.35-1-22-4.72-30.67-16.91-7.28-10-14.36-22.41-20.65-32.44-3.93-6.29-6.49-7.47-16.51-7.47h-6.89v30.87c0,16.71,2.17,17.69,17.9,19.27v5.5h-52.5V513c16.32-1.77,17.69-2.56,17.69-19.27V415.29c0-16.72-2.16-17.31-17.69-19.08v-5.5H332.3c14.35,0,24,1.77,31.46,6.68,8.06,5.11,13.37,14,13.37,26,0,16.91-10.82,27.52-25.37,33.82,3.54,6.09,12,19.26,17.9,28.11,7.27,10.42,11,15.34,15.53,20.26,5.31,5.7,9.83,7.86,14.35,9ZM326.2,456.18c10.23,0,16.72-1.57,21.63-5.7,7.67-5.7,10.81-13.57,10.81-24.18,0-21-14-28.71-29.1-28.71-5.7,0-9,.79-10.42,2-1.77,1.37-2.36,3.34-2.36,8.45v48.17Z'
					transform='translate(-87 -194.89)'
				/>
			</motion.svg>
			<motion.svg
				variants={pathVariants2}
				initial='hidden'
				animate='visible'
				id='Layer_2'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 412.56 52.64'
			>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M132.94,685.8c-.94,0-1.73-.07-2.66-.14-5.26-.36-8.07-1.73-11.24-6.2-2.66-3.67-5.25-8.2-7.56-11.88-1.44-2.3-2.37-2.73-6-2.73h-2.52v11.3c0,6.12.8,6.48,6.56,7.06v2H90.24v-2c6-.65,6.48-.94,6.48-7.06V647.42c0-6.12-.79-6.33-6.48-7v-2H108.6c5.26,0,8.79.65,11.52,2.45a10.76,10.76,0,0,1,4.9,9.5c0,6.2-4,10.08-9.29,12.39,1.3,2.23,4.39,7.06,6.55,10.3a66.69,66.69,0,0,0,5.69,7.41,10.35,10.35,0,0,0,5.26,3.31Zm-26.57-23.4c3.74,0,6.12-.58,7.92-2.09,2.81-2.09,4-5,4-8.86,0-7.7-5.11-10.51-10.66-10.51-2.09,0-3.31.29-3.81.72-.65.51-.87,1.23-.87,3.1V662.4Z'
					transform='translate(-90.24 -633.45)'
				/>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M168.65,683.57a82.55,82.55,0,0,0-11,2.52v-5.55c-3.89,3.24-7,5.55-11,5.55-4.83,0-9-3-9-10.8v-14c0-3.89-.58-4.32-2.38-4.68l-2-.36v-1.87a99.9,99.9,0,0,0,10.3-1.3c-.22,2.3-.22,5.76-.22,10.51v9.8c0,6.33,3.32,8.13,6.56,8.13a11.36,11.36,0,0,0,7.77-3.45V661.32c0-3.89-.86-4.39-3.31-4.75l-2.3-.29v-1.87a102.19,102.19,0,0,0,11.3-1.3v24.12c0,3.6.58,4.11,3.31,4.25l2,.07Z'
					transform='translate(-90.24 -633.45)'
				/>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M186.65,653.47a8.58,8.58,0,0,1,3.17-.72c7.7,0,14.18,6.7,14.18,15.27,0,9.72-8.35,18.14-17.78,18.07a26.72,26.72,0,0,1-11.09-2.59V643c0-4.47-.22-4.9-4.83-5.26V635.9a59,59,0,0,0,10.52-2.45V656Zm-5.83,23.4a6.2,6.2,0,0,0,.36,2.52c.86,1.8,3.67,3.89,7.12,3.89,6.2,0,9.29-5.33,9.29-13.46s-5-13-10.94-13a13.87,13.87,0,0,0-5.83,1.37Z'
					transform='translate(-90.24 -633.45)'
				/>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M208.61,685.22v-2c4.53-.43,5-.79,5-5.69V662.69c0-4.47-.22-4.76-4.54-5.48v-1.72a47.79,47.79,0,0,0,10.23-2.88v24.91c0,4.9.5,5.26,5.18,5.69v2Zm7.49-39.67a3.94,3.94,0,0,1-3.82-3.82,3.89,3.89,0,0,1,3.89-4,3.76,3.76,0,0,1,3.67,4A3.83,3.83,0,0,1,216.1,645.55Z'
					transform='translate(-90.24 -633.45)'
				/>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M263.62,685.22c-3.89,0-8.14.08-9.65.15-.43-.51-11.74-13.9-12.17-14.33-1-1.15-1.44-1.51-2.09-1.51a4.61,4.61,0,0,0-1.3.14v8c0,4.83.36,5.12,5.05,5.55v2H227.54v-2c4.83-.43,5.19-.94,5.19-5.55V643.25c0-4.69-.51-4.83-5-5.48V635.9a44.63,44.63,0,0,0,10.65-2.45V667.8a8.59,8.59,0,0,0,4.61-2.52,60.08,60.08,0,0,0,5.55-6.7c1.51-2.09.93-2.66-2.52-3v-2l14.83-.64v1.94c-5,.79-6.48,1.37-9.58,4.61-1.36,1.44-4.6,5.11-6.12,7,1.44,2,8.79,10.37,11.16,12.89,3.46,3.46,4.47,3.67,7.28,3.82Z'
					transform='translate(-90.24 -633.45)'
				/>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M281.54,685.22v-2c5.9-.65,6.48-.94,6.48-7.06V647.57c0-6.2-.58-6.48-6.48-7.13v-2h19.3v2c-6,.65-6.55.93-6.55,7.13v28.58c0,6.2.57,6.41,6.55,7.06v2Z'
					transform='translate(-90.24 -633.45)'
				/>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M325.1,685.22v-2c4.18-.43,4.61-.94,4.61-5.83V665.5c0-5-1.8-8.43-6.55-8.43-3,0-5.76,1.73-8,3.74v16.85c0,5,.43,5.12,4.68,5.55v2H304.29v-2c4.75-.51,5.19-.79,5.19-5.55V662.83c0-4.68-.51-4.9-4.4-5.54v-1.88a40.64,40.64,0,0,0,10.09-2.88v5.69c1.44-1,3-2.09,4.89-3.31a11,11,0,0,1,6-2.16c5.76,0,9.36,4.25,9.36,11.23v13.68c0,4.9.43,5.12,4.61,5.55v2Z'
					transform='translate(-90.24 -633.45)'
				/>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M357.86,685.15a7.22,7.22,0,0,1-3.09.94c-4.61,0-7.06-2.81-7.06-8.57V656.57h-5l-.29-.87,1.95-2.09h3.31v-6c1.37-1.44,3.46-3.32,4.82-4.76l1.08.15c-.14,3-.21,7.2-.21,10.65h8.21a2.26,2.26,0,0,1-.44,3H353.4V675c0,5.83,2.3,6.91,4.17,6.91a10.25,10.25,0,0,0,4.4-1.15l.65,1.87Z'
					transform='translate(-90.24 -633.45)'
				/>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M390.84,679.1c-4.61,5.76-9.65,7-11.95,7-8.79,0-14.12-7.2-14.12-15.48a18.49,18.49,0,0,1,4.68-12.6,14.77,14.77,0,0,1,10.73-5.26,11.23,11.23,0,0,1,11,11.16c-.07,1.44-.29,2.09-1.44,2.38-1.44.29-10.66.93-19.23,1.22-.21,9.65,5.69,13.61,10.8,13.61,3,0,5.69-1.22,8.36-3.67Zm-12.39-23.61c-3.31,0-6.55,3.09-7.56,8.93,4,0,8.07,0,12.32-.22,1.29,0,1.72-.36,1.72-1.44C385,658.94,382.49,655.49,378.45,655.49Z'
					transform='translate(-90.24 -633.45)'
				/>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M412.08,685.22H395.52v-2c4.53-.43,5-.79,5-5.47v-15c0-4.75-.28-5-4.46-5.47v-1.8a39.63,39.63,0,0,0,10.15-3v7.92c2.52-3.74,5.55-7.7,9.15-7.7,2.66,0,4.17,1.66,4.17,3.46a4.84,4.84,0,0,1-2.44,4,1.43,1.43,0,0,1-1.88-.15c-1.08-1.08-1.94-1.8-3.24-1.8-1.51,0-4.17,2.23-5.76,5.91v13.53c0,4.76.36,5.12,5.91,5.55Z'
					transform='translate(-90.24 -633.45)'
				/>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M422.8,685.22v-2c4.54-.43,5-.79,5-5.69V662.69c0-4.47-.21-4.76-4.53-5.48v-1.72a47.53,47.53,0,0,0,10.22-2.88v24.91c0,4.9.51,5.26,5.19,5.69v2Zm7.49-39.67a3.94,3.94,0,0,1-3.81-3.82,3.89,3.89,0,0,1,3.88-4,3.77,3.77,0,0,1,3.68,4A3.83,3.83,0,0,1,430.29,645.55Z'
					transform='translate(-90.24 -633.45)'
				/>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M458.44,652.75c9,0,15.7,6.84,15.7,16.13,0,11.66-8.64,17.21-15.7,17.21a15.81,15.81,0,0,1-16-16.06C442.46,658.29,451.6,652.75,458.44,652.75Zm-.86,2.45c-4.39,0-8.35,4.25-8.35,12.6,0,9.14,4,15.77,9.93,15.77,4.47,0,8.21-3.24,8.21-13.11C467.37,662,463.92,655.2,457.58,655.2Z'
					transform='translate(-90.24 -633.45)'
				/>
				<motion.path
					fill='#0097e6'
					class='cls-1'
					d='M495.38,685.22H478.82v-2c4.54-.43,5-.79,5-5.47v-15c0-4.75-.29-5-4.47-5.47v-1.8a39.82,39.82,0,0,0,10.16-3v7.92c2.52-3.74,5.54-7.7,9.14-7.7,2.66,0,4.18,1.66,4.18,3.46a4.85,4.85,0,0,1-2.45,4,1.41,1.41,0,0,1-1.87-.15c-1.08-1.08-2-1.8-3.24-1.8-1.52,0-4.18,2.23-5.76,5.91v13.53c0,4.76.36,5.12,5.9,5.55Z'
					transform='translate(-90.24 -633.45)'
				/>
			</motion.svg>
		</div>
	);
};

export default Logo;