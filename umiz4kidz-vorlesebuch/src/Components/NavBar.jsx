import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav>
				<div className="nav-items container">

					<div className="logo">



						<a href="/" className="my-a-class">
							<img src="https://umiz4kids.at/szimu%20klein.jpg" alt="Zimu" /><h4>umiz4kids</h4>
						</a>
					</div>
					<ul>
						<li>
							<NavLink to="/about">Das Projekt</NavLink>
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
							<NavLink to="/vokabeltrainer/1">Vokabeltrainer</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
