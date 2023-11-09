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
							<a href="/about">Das Projekt</a>
						</li>
						<li>
							<a href="/vorlesebuecher">
								Vorlesebücher
							</a>
						</li>
						<li>
							<a href="/mitlesebuecher">Mitlesebücher</a>
						</li>
						<li>
							<a href="/woerterbuecher">Wörterbücher</a>
						</li>
						<li>
							<a href="/vokabeltrainer/1">Vokabeltrainer</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
