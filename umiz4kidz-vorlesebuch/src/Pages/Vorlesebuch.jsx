import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Vorlesebuch = () => {
	const [vorlesebuch, setVorlesebuch] = useState([]);
	const navigate = useNavigate();
	const { slug } = useParams();

	useEffect(() => {
		const fetchVorlesebuch = async () => {
			
			let URL =  window.location.href + '/data.json';
			let response = await fetch(URL);
			setVorlesebuch(await response.json());
		};

		fetchVorlesebuch
		();
	}, [slug]);

	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div>
				<div className="title">
					<h1>{Vorlesebuch.name}</h1>
				</div>
				<div className="flex-container">
					{Vorlesebuch.image && (
						<img src={Vorlesebuch.image.url} alt="" className="vorlesebuch-img" />
					)}
					<div className="vorlesebuch-infos">
						<div className="row">
							<h3 className="label">Name: </h3>
							<p className="text">{Vorlesebuch.name}</p>
						</div>
						<div className="row">
							<h3 className="label">Category: </h3>
							<p className="text">{Vorlesebuch.category}</p>
						</div>
						<div className="row">
							<h3 className="label">Info: </h3>
							<p className="text">{Vorlesebuch.info}</p>
						</div>
						<div className="row">
							<h3 className="label">Instructions: </h3>
							<p className="text">{Vorlesebuch.instructions}</p>
						</div>
						<div className="row">
							<h3 className="label">Ingredients: </h3>
							<p className="text">{Vorlesebuch.ingredients}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vorlesebuch;
