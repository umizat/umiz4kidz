import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Vorlesebuecher = () => {
	const [vorlesebuecher, setVorlesebuecher] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchVorlesebuecher = async () => {
			
			let URL =  window.location.href + '/products.json';
			let response = await fetch(URL);
			setVorlesebuecher(await response.json());
		};

		fetchVorlesebuecher();
	}, []);

	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div className="title">
				<h1>CockTails</h1>
			</div>
			<div className="cocktails-container">
				{vorlesebuecher.map((product) => (
					<div key={product.id} className="cocktail-card">
						<img src={product.image.url} alt="" className="cocktail-img" />
						<div className="cocktail-info">
							<div className="content-text">
								<h2 className="cocktail-name">{product.name}</h2>
								<span className="info">{product.info}</span>
							</div>
							<Link to={`/products/${product.slug}`}>
								<div className="btn">View Details</div>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Vorlesebuecher;
