import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav>
				<div className="nav-items container">
					
					<div className="logo">
						
					
						
						<a href="/" className="my-a-class">
							<img src="szimu klein.jpg" alt="Zimu" />umiz4kids
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
