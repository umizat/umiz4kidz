import { useNavigate } from 'react-router-dom';

const About = () => {
	const navigate = useNavigate();
	return (
		<div className="container">
			
			
				<h1>Über umiz4kids</h1>
			
			
			<div className="about-container">
				<div>	<img src="VanderBellen.jpg" alt="Bundespräsident Alexander van der Bellen hat sich unsere Kinderbücher in Oberwart angesehen."  width="100%"/>
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
<div className="about-title">


<a href="https://www.youtube.com/watch?v=mYk7-CRqvDg" target="_blank">
  <video width="320" height="240" controls>
    <source src="https://www.youtube.com/watch?v=mYk7-CRqvDg" type="video/mp4">
    Dein Browser unterstützt das Video-Tag nicht.
  </video>
</a>
			
			


</div>
			</div>
		
	);
};

export default About;
