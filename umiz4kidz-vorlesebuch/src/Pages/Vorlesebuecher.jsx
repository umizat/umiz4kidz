import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import vorlesebuecherjson from '../data/vorlesebuecher/vorlesebuecher.json';
import { ImageMap } from '@qiuz/react-image-map';


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
				<h1>Vorlesebücher</h1>
			</div>
			<div className="vorlesebuecher-container">
				{vorlesebuecher.map((vorlesebuch) => (
					<div key={vorlesebuch.id} className="vorlesebuch-card">
						<a href={`/vorlesebuecher/${vorlesebuch.slug}`} >
							<img src= {vorlesebuch.img} alt="" className="vorlesebuch-img" />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Vorlesebuecher;
