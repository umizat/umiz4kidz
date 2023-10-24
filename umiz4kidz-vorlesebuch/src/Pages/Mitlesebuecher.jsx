import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mitlesebuecherjson from '../data/mitlesebuecher/mitlesebuecher.json';


const Mitlesebuecher = () => {
	const [mitlesebuecher, setMitlesebuecher] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setMitlesebuecher(mitlesebuecherjson);
		console.log(mitlesebuecher);
	}, []);

	return (
		<div className="container">
			
			<div className="title">
				<h1>Mitlesebücher</h1>
				<p>Lass dir das Kinderbuch vorlesen und mach mit. Tippe auf das Symbol!</p>
			</div>
			<div className="buecher-container">
				{mitlesebuecher.map((mitlesebuch) => (
					<div key={mitlesebuch.id} className="buch-card">
						<a href={`/mitlesebuecher/${mitlesebuch.slug}/0/`} >
							<img src= {mitlesebuch.img} alt="" className="buch-img" />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Mitlesebuecher;
