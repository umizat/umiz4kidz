import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import vorlesebuecherjson from '../data/vorlesebuecher/vorlesebuecher.json';


const Vorlesebuecher = () => {
	const [vorlesebuecher, setVorlesebuecher] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setVorlesebuecher(vorlesebuecherjson);
	}, []);

	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div className="title">
				<h1>Vorlesebuecher</h1>
			</div>
			<div className="vorlesebuecher-container">
				{vorlesebuecher.map((vorlesebuch) => (
					<div key={vorlesebuch.id} className="vorlesebuch-card">
						<img src= {vorlesebuch.img} alt="" className="vorlesebuch-img" />
						<div className="vorlesebuch-info">
							<div className="content-text">
								<h2 className="vorlesebuch-name">{vorlesebuch.titel.de}</h2>
								<span className="info">{vorlesebuch.titel.hu}</span>
							</div>
							<Link to={`/vorlesebuecher/${vorlesebuch.slug}`}>
								<div className="btn">Ansehen</div>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Vorlesebuecher;
