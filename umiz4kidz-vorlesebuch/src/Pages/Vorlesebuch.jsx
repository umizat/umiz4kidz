import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageWithMap from '../Components/ImageWithMap';

const Vorlesebuch = () => {
	const [vorlesebuch, setVorlesebuch] = useState([]);
	const [seiten, setSeiten] = useState([]);
	const navigate = useNavigate();
	const { slug } = useParams();
	const { page } = useParams();


	useEffect(() => {

	}, []);


	useEffect(() => {

		const fetchVorlesebuch = async () => {

			let URL = "https://360demo.chilicode.com/umiz/vlb/" + slug + "/data.json";

			let response = await fetch(URL);
			let data = await response.json();
			setVorlesebuch(data);

		}

		fetchVorlesebuch();
	}, [slug, page]);


	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div>
				<ImageWithMap vorlesebuch={vorlesebuch} />
				<div className="vorlesebuch-infos">
					<button className="btn" onClick={() => navigate(-1)}>
						Zurück
					</button>

					<button className="btn" onClick={() => navigate(-1)}>
						weiter
					</button>				</div>
			</div>
		</div>
	);
};

export default Vorlesebuch;
