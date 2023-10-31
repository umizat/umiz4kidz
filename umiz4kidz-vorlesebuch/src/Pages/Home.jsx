import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			
			<h1>Ungarisch und Burgernland-Kroatisch spielerisch kennenlernen</h1>
			<h2>Magyar és horvát nyelvvel való játékos ismerkedés</h2>
			<h3>Kroatischer Text</h3>


			
				
				<div className="banner">
					
					{/* First Link and Div */}
					<div className="link-div">
						
						<Link to="/vorlesebuecher">
							<div className="btn">
								<img src="vorlesebücher.jpg" alt="Vorlesebücher" />
								Vorlesebücher
							</div>
						</Link>
					</div>

					{/* Second Link and Div */}
					<div className="link-div">
						
						<Link to="/mitlesebuecher">
							<div className="btn">
							<img src="Mitlesebucher.jpg" alt="Mitlesebücher" />
								
						Mitlesebücher
						
						</div>
						</Link>
					</div>

					{/* Third Link and Div */}
					<div className="link-div">
						
						<Link to="/woerterbuecher">
							<div className="btn">
								<img src="wörterbücher.jpg" alt="Wörterbücher" />
								Wörterbücher
							</div>
						</Link>
					</div>
					{/* Fourth Link and Div */}
					<div className="link-div">
						
						<Link to="/vokabeltrainer/0">
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
