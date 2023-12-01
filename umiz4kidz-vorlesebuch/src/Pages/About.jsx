import { useNavigate } from 'react-router-dom';

const About = () => {
	const navigate = useNavigate();
	return (
		<div className="container">


			<h1>Über UMIZ 4 KIDS</h1>


			<div className="about-container">
				<div>
					<img src="VanderBellen.jpg" alt="Bundespräsident Alexander van der Bellen hat sich unsere Kinderbücher in Oberwart angesehen." />

				</div>
				<div>
					<p>Unsere UMIZ 4 KIDS - Gruppe wurde im Jahr 2010 gegründet und hat sich die Bewahrung, Pflege und den Fortbestand der Mehrsprachigkeit im Burgenland zum Ziel gesetzt.
Schwerpunkte sind Veranstaltungen, Bücher, Hörbücher, Bilderbuchkinos und vieles mehr. Herzstück sind unsere ungarisch-deutsch-
burgenlandkroatischen Kinderbücher, deren Themengebiete den ganzen Jahreskreis abdecken und in Kindergärten, Volksschulen, Bibliotheken sowie im privaten Bereich Anwendung finden.
					</p>
					<p>
					Das UMIZ 4 KIDS - Team möchte bei den Jüngsten ansetzen und ihnen Sprachen spielerisch näherbringen (auch hiesige Dialekte). Mittels der Kinderbücher,
bunt gestalteten Wörterbüchern,interaktiven Bilderbuchkinos, kreativen Workshops und vielen weiteren Veranstaltungen versuchen wir Kinder
zu erreichen und für die Mehrsprachigkeit zu begeistern.
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
