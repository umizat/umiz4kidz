import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav>
				<div className="nav-items container">
					<div className="logo">
						<a href="/">
							<h1>umiz4kids</h1>
						</a>
					</div>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/vorlesebuecher">Vorlesebuecher</NavLink>
						</li>
						<li>
							<NavLink to="/mitlesebuecher">Mitlesebuecher</NavLink>
						</li>
						<li>
							<NavLink to="/woerterbuecher">Wörterbücher</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
