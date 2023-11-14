import { useNavigate } from 'react-router-dom';

const About = () => {
	const navigate = useNavigate();
	return (
		<div className="container">


			<h1>Über umiz4kids</h1>


			<div className="about-container">
				<div>
					<img src="VanderBellen.jpg" alt="Bundespräsident Alexander van der Bellen hat sich unsere Kinderbücher in Oberwart angesehen." />

				</div>
				<div>
					<p>Unsere umiz4kids-Gruppe besteht seit 2010 und beinhaltet Themen rund ums mehrsprachige Burgenland - Veranstaltungen, Bücher, Hörbücher, Bilderbuchkinos und vieles mehr. Herzstück sind unsere deutsch - ungarisch - bgld.kroatischen Kinderbücher, die in Kindergärten, Volksschulen und im privaten Bereich Anwendung finden.
					</p>
					<p>
						Unser Team von umiz4kids möchte Kindern Sprachen spielerisch näherbringen.
						Mittels Kinderbücher, bunt gestaleteten Wörterbüchern, Workshops und vielen weiteren Veranstaltungen versuchen wir Kinder zu erreichen und sie für die Mehrsprachigkeit zu begeistern.
					</p>
					<img src="Bücherausstellung.jpg" alt="Bücherausstellung"/>
				</div>


			</div>

			<div className="video">
				<h6>Sehen Sie hier ein Video über unser Bilderbuchkino.</h6>

				<iframe src="https://www.youtube.com/embed/mYk7-CRqvDg?si=wCU9_FkB2wclbCPd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

			</div>
		</div >

	);
};

export default About;
