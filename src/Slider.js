import React from 'react';
import styled from 'styled-components';

const styledSlider = styled.div`
	border: 1px solid red;
	width: 100%;
	height: 100vh;
	background-color: green;
`;
let sliderArr = [1, 2, 3, 4, 5];

const Slider = () => {
	return (
		<styledSlider>
			{sliderArr.map((item, index) => {
				return <div key={index}>{item}</div>;
			})}
		</styledSlider>
	);
};

export default Slider;
