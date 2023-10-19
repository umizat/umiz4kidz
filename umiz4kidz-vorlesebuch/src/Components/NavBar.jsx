import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav>
				<div className="nav-items container">
					
					<div className="logo">
						<a href="/">
							<img src="https://umiz4kids.at/szimu%20klein.jpg" alt="Szimu" />
						</a>
					</div>
					<ul>
						<li>
							<NavLink to="/about">Über uns</NavLink>
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
