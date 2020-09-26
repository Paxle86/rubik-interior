import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Slider from './Slider';

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Slider />
			</div>
		</BrowserRouter>
	);
}

export default App;
