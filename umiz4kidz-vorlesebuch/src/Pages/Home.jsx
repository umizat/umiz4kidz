import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">

			<div class="slideshow">
  <img src="Mitlesebucher.jpg" alt="Mitlesebucher">
  <img src="vokabeltrainer.jpg" alt="Vokabeltrainer">
  <img src="vorlesebücher.jpg" alt="Vorlesebücher">
  <img src="wörterbücher.jpg" alt="Wörterbücher">
</div>

<script>
  // JavaScript-Code für die Slideshow
  var currentIndex = 0;
  var slides = document.querySelectorAll('.slideshow img');
  var totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach(function (slide) {
      slide.style.display = 'none';
    });

    slides[index].style.display = 'block';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  // Starte die Slideshow
  showSlide(currentIndex);

  // Automatische Weiterleitung alle 3 Sekunden (3000 Millisekunden)
  setInterval(nextSlide, 3000);
</script>


			<h1>Ungarisch und Burgenland-Kroatisch spielerisch kennenlernen</h1>
			<h2>Magyar és burgenlandi-horvát nyelvvel való játékos ismerkedés</h2>
			<h3>Igrajući upoznati madjarski i gradišćanskohrvatski jezik</h3>
			<div className="banner">
				{/* First Link and Div */}
				<div className="link-div">
					<Link to="/vorlesebuecher">
							<img src="vorlesebücher.jpg" alt="Vorlesebücher" />
							Vorlesebücher
					</Link>
				</div>
				{/* Second Link and Div */}
				<div className="link-div">
					<Link to="/mitlesebuecher">
							<img src="Mitlesebucher.jpg" alt="Mitlesebücher" />
							Mitlesebücher
					</Link>
				</div>
				{/* Third Link and Div */}
				<div className="link-div">
					<Link to="/woerterbuecher">
							<img src="wörterbücher.jpg" alt="Wörterbücher" />
							Wörterbücher
					</Link>
				</div>
				{/* Fourth Link and Div */}
				<div className="link-div">
					<Link to="/vokabeltrainer/1">
							<img src="vokabeltrainer.jpg" alt="Vokabeltrainer" />
							Vokabeltrainer
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
