import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			
			<h1>Ungarisch und Burgernland-Kroatisch (lila) spielerisch kennenlernen (blau)</h1><br />
			<h1>Ungarischer text</h1><br></br>
			<h1>Kroatischer Text</h1>


			
				
				<div className="banner">
					
					{/* First Link and Div */}
					<div className="link-div">
						
						<Link to="/vorlesebücher">
							<div className="btn">
								<img src="vorlesebücher.jpg" alt="Vorlesebücher" />
								Vorlesebücher
							</div>
						</Link>
					</div>

					{/* Second Link and Div */}
					<div className="link-div">
						
						<Link to="/mitlesebücher">
							<div className="btn">
							<img src="Mitlesebucher.jpg" alt="Mitlesebücher" />
								
						Mitlesebücher
						
						</div>
						</Link>
					</div>

					{/* Third Link and Div */}
					<div className="link-div">
						
						<Link to="/wörterbücher">
							<div className="btn">
								<img src="wörterbücher.jpg" alt="Wörterbücher" />
								Wörterbücher
							</div>
						</Link>
					</div>
					{/* Fourth Link and Div */}
					<div className="link-div">
						
						<Link to="/vokabeltrainer">
							<div className="btn">
								<img src="vokabeltrainer.jpg" alt="Vokabeltrainer" />
								Vokabeltrainer
							</div>
						</Link>
					</div>
				</div>


				
</div>
	
	
	
	);
};

export default Home;
