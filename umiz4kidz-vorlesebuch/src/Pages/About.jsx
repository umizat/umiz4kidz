import { useNavigate } from 'react-router-dom';

const About = () => {
	const navigate = useNavigate();
	return (
		<div className="container">
			
			
				<h1>Über umiz4kids</h1>
			
			
			<div className="about-container">
				<div>	<img src="VanderBellen.jpg" alt="Bundespräsident Alexander van der Bellen hat sich unsere Kinderbücher in Oberwart angesehen."  height="100%"/>
		</div>
		<div>
				<p>Unsere umiz4kids-Gruppe besteht seit 2010 und beinhaltet Themen rund ums mehrsprachige Burgenland - Veranstaltungen, Bücher, Hörbücher, Bilderbuchkinos und vieles mehr. Herzstück sind unsere deutsch - ungarisch - bgld.kroatischen Kinderbücher, die in Kindergärten, Volksschulen und im privaten Bereich Anwendung finden. 
				</p>
				<br></br>
				<p>
					Unser Team von umiz4kids möchte Kindern Sprachen spielerisch näherbringen.
					Mittels Kinderbücher, bunt gestaleteten Wörterbüchern, Workshops und vielen weiteren Veranstaltungen versuchen wir Kinder zu erreichen und sie für die Mehrsprachigkeit zu begeistern.
				</p>
				</div>
				</div>
				<div className="about-title">
			<img src="Bücherausstellung.jpg" alt="Bücherausstellung" width="100%" />

</div>
<div className="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/mYk7-CRqvDg" frameborder="0" allowfullscreen></iframe>


</div>
			</div>
		
	);
};

export default About;
