import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			<div className="banner-container">
				<div className="banner">
					<h2>It's time for books</h2>
					<Link to="/vorlesebuecher">
						<div className="btn">View books</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
