import React, { StrictMode, Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './styles/main.css';

import Game from './components/Game';
import About from './components/About';
import Winner from './components/Winner';

const root = createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<Game />}></Route>
				<Route path='/aboutus' element={<About />}></Route>
				<Route path='/winner' element={<Winner />}></Route>
			</Routes>
		</Router>
	</StrictMode>
)
