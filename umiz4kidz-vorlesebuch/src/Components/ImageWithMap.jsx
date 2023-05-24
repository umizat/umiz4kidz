import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const ImageWithMap = ({ vorlesebuch }) => {

	const { slug } = useParams();
	const { page } = useParams();
	const containerRef = useRef(null);
	const navigate = useNavigate();

	let pagedata = vorlesebuch[page];

	const baseUrl = "http://360demo.chilicode.com/umiz/vlb/";

	if (pagedata) {
		console.log("geladen" + pagedata)
	}

	/* deutsches audio */
	const [daudio, setDaudio] = useState(null);
	const [playingd, setPlayingd] = useState(false);

	/* ungarisches audio */
	const [uaudio, setUaudio] = useState(null);
	const [playingu, setPlayingu] = useState(false);

	/* kroatisches audio */
	const [kaudio, setKaudio] = useState(null);
	const [playingk, setPlayingk] = useState(false);


	const dtoggle = () => {
		if (playingd) {
			daudio.pause();
		} else {
			if (uaudio) uaudio.pause();
			if (kaudio) kaudio.pause();
			daudio.play();
		}
		setPlayingd(!playingd);
		setPlayingu(false);
		setPlayingk(false);
	};

	const utoggle = () => {
		if (playingu) {
			uaudio.pause();
		} else {
			if (daudio) daudio.pause();
			if (kaudio) kaudio.pause();
			uaudio.play();
		}
		setPlayingd(false);
		setPlayingu(!playingu);
		setPlayingk(false);
	};

	const ktoggle = () => {
		if (playingk) {
			kaudio.pause();
		} else {
			if (daudio) daudio.pause();
			if (uaudio) uaudio.pause();
			kaudio.play();
		}
		setPlayingd(false);
		setPlayingu(false);
		setPlayingk(!playingk);
	};


	const map = vorlesebuch[page]?.['map'];

	const totalPages = Object.keys(vorlesebuch).length;

	const handleIncrementPage = () => {
		daudio.pause();
		uaudio.pause();
		kaudio.pause();
		const nextPage = parseInt(page) + 1;
		if (nextPage < totalPages) {
			navigate(`/vorlesebuecher/${slug}/${nextPage}`);
		} else {
			navigate('/vorlesebuecher');
		}
	};

	const handleGoBack = () => {
		daudio.pause();
		uaudio.pause();
		kaudio.pause();
		navigate(-1);
	};


	useEffect(() => {
		if (pagedata) {
			console.log(pagedata);
			setDaudio(new Audio(baseUrl + slug + "/" + pagedata.d));
			setUaudio(new Audio(baseUrl + slug + "/" + pagedata.u));
			setKaudio(new Audio(baseUrl + slug + "/" + pagedata.k));
		}
	}, [pagedata, slug]
	);

	useEffect(() => {
		if (pagedata) {
			playingd ? daudio.play() : daudio.pause();
			playingu ? uaudio.play() : uaudio.pause();
			playingk ? kaudio.play() : kaudio.pause();
		}
	}, [playingd, daudio, playingu, uaudio, playingk, kaudio]
	);

	useEffect(() => {
		if (daudio) {
			daudio.addEventListener('ended', () => setPlayingd(false));
			return () => {
				daudio.removeEventListener('ended', () => setPlayingd(false));
			};
		}
		if (uaudio) {
			uaudio.addEventListener('ended', () => setPlayingu(false));
			return () => {
				uaudio.removeEventListener('ended', () => setPlayingu(false));
			};
		}
		if (kaudio) {
			kaudio.addEventListener('ended', () => setPlayingk(false));
			return () => {
				kaudio.removeEventListener('ended', () => setPlayingk(false));
			};
		}
	}, [playingd, daudio, playingu, uaudio, playingk, kaudio]);


	return (
		<div>
		  <nav>
			  <div ref={containerRef} className='imageContainer' style={{ position: "relative" }}>
				{vorlesebuch && pagedata && (
				  <div>
					<div  className="arrow left-arrow divWithHandCursor"  onClick={handleGoBack}>
					  <FaArrowLeft style={{ width: "100%", height: "100%" }} />
					</div>
					<img className='' src={baseUrl + slug + "/" + pagedata.img} alt="" />
					<div className='divWithHandCursor' onClick={dtoggle} style={{
					  position: "absolute",
					  left: `${map[0]['left']}`,
					  top: `${map[0]['top']}`,
					  width: `${map[0]["width"]}`,
					  height: `${map[0]["height"]}`,
					}}></div>
					<div  className='divWithHandCursor' onClick={utoggle} style={{
					  position: "absolute",
					  left: `${map[1]?.left}`,
					  top: `${map[1]?.top}`,
					  width: `${map[1]?.width}`,
					  height: `${map[1]?.height}`,
					}}></div>
					<div  className='divWithHandCursor' onClick={ktoggle} style={{
					  position: "absolute",
					  left: `${map[2]?.left}`,
					  top: `${map[2]?.top}`,
					  width: `${map[2]?.width}`,
					  height: `${map[2]?.height}`,
					}}></div>
					<div className="arrow right-arrow divWithHandCursor" onClick={handleIncrementPage}>
					  <FaArrowRight style={{ width: "100%", height: "100%" }} />
					</div>
				  </div>
				)}
			  </div>
		  </nav>
		</div>
	  );
	  
	  
	  
	  

};

export default ImageWithMap;
