import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './sidebar.styles.scss';


const Sidebar = () => {
	return (
		<section className='navigation'>
			<button	id="switch">
				<div className='line bar1'></div>
				<div className='line bar2'></div>
				<div className='line bar3'></div>
			</button>
			<nav id="sidebar" className="sidebar hide">
				<ul>
					<li>
						<Link to="calculator">Calculator</Link>
					</li>
					<li>
						<Link to="currency">Currency Converter</Link>
					</li>
					<li>
						<Link to="bmi">BMI Calculator</Link>
					</li>
				</ul>
			</nav>
		</section>
	)
};

export default Sidebar;