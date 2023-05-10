import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageWithMap from '../Components/ImageWithMap';

const Vorlesebuch = () => {
	const [vorlesebuch, setVorlesebuch] = useState([]);
	const navigate = useNavigate();
	const { slug } = useParams();
	const { page } = useParams();


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
		}

		fetchVorlesebuch();
	}, [slug, page]);


	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div>
				<ImageWithMap vorlesebuch={vorlesebuch}/>
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
