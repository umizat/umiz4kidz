import { useNavigate } from 'react-router-dom';

const About = () => {
	const navigate = useNavigate();
	return (
		<div className="container">
			<button className="btn" onClick={() => navigate(-1)}>
				zurück
			</button>
			<div className="title">
				<h1>Über umiz4kids</h1>
			</div>
			<div className="about-container">
				<p>
					Wir, das Team von umiz4kids, möchten Kindern Sprachen spielerisch näherbringen.
					Mittels Kinderbücher, bunt gestaleteten Wörterbüchern, Workshops und vielen weiteren Veranstaltungen versuchen wir Kinder zu erreichen und sie für die Mehrsprachigkeit zu begeistern.
				</p>
				<p>
					Weiters Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
					eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
					aliquid ratione facere enim eveniet modi necessitatibus quas
					asperiores pariatur, amet velit?
				</p>
			</div>
		</div>
	);
};

export default About;
