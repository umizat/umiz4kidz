import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			<div className="banner-container">
				<div className="banner">
					
					{/* First Link and Div */}
					<div className="link-div">
						<h2>Vorlesebücher</h2>
						<Link to="/vorlesebücher">
							<div className="btn">
								<img src="szimu.jpg" alt="Zimu" />
								Vorlesebücher
							</div>
						</Link>
					</div>

					{/* Second Link and Div */}
					<div className="link-div">
						<h2>Hier sind die</h2>
						<Link to="/woerterbücher">
							<div className="btn">Wörterbücher</div>
						</Link>
					</div>

					{/* Third Link and Div */}
					<div className="link-div">
						<h2>Hier sind die</h2>
						<Link to="/mitlesebücher">
							<div className="btn">Mitlesebücher</div>
						</Link>
					</div>

					{/* Fourth Link and Div */}
					<div className="link-div">
						<h2>Hier sind die</h2>
						<Link to="/vokabeltrainer">
							<div className="btn">Vokabeltrainer</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
