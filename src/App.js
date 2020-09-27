import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Modal from './components/Modal';
import Header from './components/Header';

function App() {
	const [showModal, setShowModal] = useState(true);
	return (
		<BrowserRouter>
			<Header />
			<Modal showModal={showModal} setShowModal={setShowModal} />
		</BrowserRouter>
	);
}

export default App;
