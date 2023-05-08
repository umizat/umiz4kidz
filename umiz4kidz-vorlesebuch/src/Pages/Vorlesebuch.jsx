import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Vorlesebuch = () => {
	const [vorlesebuch, setVorlesebuch] = useState([]);
	const navigate = useNavigate();
	const { slug } = useParams();


	useEffect(() => {

		const fetchVorlesebuch = async () => {
			let URL = "http://localhost:8080/vlb/dga/";
			const { book } = await fetch(URL)
				.then(resp => resp.json())
				.then((responseJson) => {
					return responseJson;
				})
				.catch((error) => {
					console.error(error);
				});
			setVorlesebuch(book);
			console.error("sososo");
		}

		fetchVorlesebuch();
	}, [slug]);


	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div>
				<p className="text">{vorlesebuch.titel}</p>
				<a href=''>
					<img src={vorlesebuch.img} alt="" className="vorlesebuch-img" />
				</a>
				
				<div className="vorlesebuch-infos">
				<button className="btn" onClick={() => navigate(-1)}>
						Zurück
					</button>

					<button className="btn" onClick={() => navigate(-1)}>
						nach vor
					</button>				</div>
			</div>
		</div>
	);
};

export default Vorlesebuch;
