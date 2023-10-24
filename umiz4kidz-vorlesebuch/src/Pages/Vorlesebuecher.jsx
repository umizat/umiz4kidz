import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import vorlesebuecherjson from '../data/vorlesebuecher/vorlesebuecher.json';


const Vorlesebuecher = () => {
	const [vorlesebuecher, setVorlesebuecher] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setVorlesebuecher(vorlesebuecherjson);
		console.log(vorlesebuecher);
	}, []);

	return (
		<div className="container">
			
			<div className="title">
				<h1>Vorlesebücher</h1>
				<p>Lass dir Kinderbücher in den drei Sprachen Ungarisch, Burgenland-Kroatisch und Deutsch vorlesen. Tippe auf den Text!</p>
			</div>
			<div className="buecher-container">
				{vorlesebuecher.map((vorlesebuch) => (
					<div key={vorlesebuch.id} className="buch-card">
						<a href={`/vorlesebuecher/${vorlesebuch.slug}/0/`} >
							<img src= {vorlesebuch.img} alt="" className="buch-img" />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Vorlesebuecher;
