import { Link } from 'react-router-dom';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


var settings = {
	dots: false,
	autoplay: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	pauseOnHover: false,

};

const Home = () => {
	return (
		<div className="container">

			<Slider {...settings}>
				<div className='slide'>
				<a href="/vorlesebuecher">
						<img src="vorlesebücher.jpg" alt="Vorlesebücher" />
						<h1>Vorlesebücher</h1>
				</a>
				</div>
				<div className='slide'>
				<a href="/mitlesebuecher">
						<img src="Mitlesebucher.jpg" alt="Mitlesebücher" />
						<h1>Mitlesebücher</h1>
					</a>
				</div>
				<div className='slide'>
				<a href="/woerterbuecher">
						<img src="wörterbücher.jpg" alt="Wörterbücher" />
						<h1>Wörterbücher</h1>
					</a>
				</div>
				<div className='slide'>
				<a href="/vokabeltrainer/1">
						<img src="vokabeltrainer.jpg" alt="Vokabeltrainer" />
						<h1>Vokabeltrainer</h1>
					</a>
				</div>
			</Slider>


			<h1>Ungarisch und Burgenland-Kroatisch spielerisch kennenlernen</h1>
			<h2>Magyar és burgenlandi-horvát nyelvvel való játékos ismerkedés</h2>
			<h3>Igrajući upoznati madjarski i gradišćanskohrvatski jezik</h3>
			<div className="banner">
				{/* First Link and Div */}
				<div className="link-div">
					<Link to="/vorlesebuecher">
						<img src="vorlesebücher.jpg" alt="Vorlesebücher" />
						<h1>Vorlesebücher</h1>
					</Link>
				</div>
				{/* Second Link and Div */}
				<div className="link-div">
					<Link to="/mitlesebuecher">
						<img src="Mitlesebucher.jpg" alt="Mitlesebücher" />
						<h1>Mitlesebücher</h1>
					</Link>
				</div>
				{/* Third Link and Div */}
				<div className="link-div">
					<Link to="/woerterbuecher">
						<img src="wörterbücher.jpg" alt="Wörterbücher" />
						<h1>Wörterbücher</h1>
					</Link>
				</div>
				{/* Fourth Link and Div */}
				<div className="link-div">
					<Link to="/vokabeltrainer/1">
						<img src="vokabeltrainer.jpg" alt="Vokabeltrainer" />
						<h1>Vokabeltrainer</h1>
					</Link>
				</div>
			</div>
		</div >
	);
};

export default Home;
