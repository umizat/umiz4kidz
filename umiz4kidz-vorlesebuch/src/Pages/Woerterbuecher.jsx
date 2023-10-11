import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import woerterbuecherjson from '../data/woerterbuecher/woerterbuecher.json';


const Woerterbuecher = () => {
	const [woerterbuecher, setWoerterbuecher] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setWoerterbuecher(woerterbuecherjson);
		console.log(woerterbuecher);
	}, []);

	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				zurück
			</button>
			<div className="title">
				<h1>Wörterbücher</h1>
			</div>
			<div className="buecher-container">
				{woerterbuecher.map((woerterbuech) => (
					<div key={woerterbuech.id} className="buch-card">
						<a href={`/woerterbuecher/${woerterbuech.slug}/0/`} >
							<img src= {woerterbuech.img} alt="" className="buch-img" />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Woerterbuecher;
