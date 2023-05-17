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
	const dtoggle = () => setPlayingd(!playingd);

	/* ungarisches audio */
	const [uaudio, setUaudio] = useState(null);
	const [playingu, setPlayingu] = useState(false);
	const utoggle = () => setPlayingu(!playingu);

	/* kroatisches audio */
	const [kaudio, setKaudio] = useState(null);
	const [playingk, setPlayingk] = useState(false);
	const ktoggle = () => setPlayingk(!playingk);


	const map = vorlesebuch[page]?.['map'];

	const handleIncrementPage = () => {
		navigate(`/vorlesebuecher/${slug}/${parseInt(page) + 1}`);
	  };
	
	  const handleGoBack = () => {
		navigate(-1);
	  };
	

	useEffect(() => {
		if (pagedata) {
			console.log(pagedata);
			setDaudio(new Audio(baseUrl + slug + "/" + pagedata.d));
			setUaudio(new Audio(baseUrl + slug + "/" + pagedata.u));
			setKaudio(new Audio(baseUrl + slug + "/" + pagedata.k));
		}
	}, [pagedata]
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
							<img className='' src={baseUrl + slug + "/" + pagedata.img} alt="" />


							<div onClick={handleGoBack} style={{
								position: "absolute",
								left: "0%",
								top: "0%",
								width: "10%",
								height: "10%",
								backgroundColor: "rgba(0, 0, 0, .05)"
							}}><FaArrowLeft style={{ width: "100%", height: "100%" }}/></div>

							<div onClick={handleIncrementPage} style={{
								position: "absolute",
								left: "90%",
								top: "0%",
								width: "10%",
								height: "10%",
								backgroundColor: "rgba(0, 0, 0, .05)"
							}}><FaArrowRight style={{ width: "100%", height: "100%" }}/></div>


							<div onClick={dtoggle} style={{
								position: "absolute",
								left: `${map[0]['left']}`,
								top: `${map[0]['top']}`,
								width: `${map[0]["width"]}`,
								height: `${map[0]["height"]}`,
								backgroundColor: "rgba(0, 0, 0, .05)"
							}}></div>
							<div onClick={utoggle} style={{
								position: "absolute",
								left: `${map[1]?.left}`,
								top: `${map[1]?.top}`,
								width: `${map[1]?.width}`,
								height: `${map[1]?.height}`,
								backgroundColor: "rgba(0, 0, 0, .05)"
							}}></div>
							<div onClick={ktoggle} style={{
								position: "absolute",
								left: `${map[2]?.left}`,
								top: `${map[2]?.top}`,
								width: `${map[2]?.width}`,
								height: `${map[2]?.height}`,
								backgroundColor: "rgba(0, 0, 0, .05)"
							}}></div>
						</div>
					)}
				</div>
			</nav>
		</div>
	);

};

export default ImageWithMap;
