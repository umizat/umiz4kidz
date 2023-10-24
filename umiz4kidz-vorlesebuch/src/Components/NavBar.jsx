import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav>
				<div className="nav-items container">
					
					<div className="logo">
						<a href="/">
							<img src="zimu-leiste.jpg" alt="Zimu" />
						</a>
					</div>
					<ul>
						<li>
							<NavLink to="/about">Über das Projekt</NavLink>
						</li>
						<li>
							<NavLink to="/vorlesebuecher">Vorlesebücher</NavLink>
						</li>
						<li>
							<NavLink to="/mitlesebuecher">Mitlesebücher</NavLink>
						</li>
						<li>
							<NavLink to="/woerterbuecher">Wörterbücher</NavLink>
						</li>
						<li>
							<NavLink to="/vokabeltrainer">Vokabeltrainer</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
