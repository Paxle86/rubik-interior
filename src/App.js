import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Header />
			</div>
		</BrowserRouter>
	);
}

export default App;
