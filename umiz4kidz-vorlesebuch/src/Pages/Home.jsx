import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			<div className="banner-container">
				<div className="banner">
				<h2>Hier sind die</h2>
					<Link to="/vorlesebuecher">
						<div className="btn">Vorlesebücher</div>
					</Link>
					<h2>Hier sind die</h2>
					<Link to="/woerterbuecher">
						<div className="btn">Wörterbücher</div>
					</Link>
					<h2>Hier sind die</h2>
					<Link to="/mitlesebuecher">
						<div className="btn">Mitlesebücher</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
