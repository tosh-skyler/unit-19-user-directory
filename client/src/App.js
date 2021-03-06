import React from 'react';

import NavbarComponent from './components/NavbarComponent';
import EmployeeTable from './components/EmployeeTable';
import Footer from './components/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
	return (
		<div className="App">
			<header>
				<NavbarComponent />
			</header>
			<div className="main-container">
				<div className="container">
					<EmployeeTable />
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default App;
