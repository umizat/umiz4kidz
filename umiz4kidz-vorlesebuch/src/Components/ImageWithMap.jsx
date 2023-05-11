import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UmizImage from './UmizImage';


const ImageWithMap = ({ vorlesebuch }) => {

	const { slug } = useParams();
	const { page } = useParams();
	const containerRef = useRef(null);

	const img = "http://360demo.chilicode.com/umiz/vlb/dga/1-Der gruene Apfel 1.jpeg";
	const url = "http://360demo.chilicode.com/umiz/vlb/dga/d01.mp3";

	const baseUrl = "http://360demo.chilicode.com/umiz/vlb/";

	const [audio] = useState(new Audio(baseUrl + slug + "/d01-seite0.mp3"));
	const [playing, setPlaying] = useState(false);
	const toggle = () => setPlaying(!playing);

	let pagedata = vorlesebuch[page];

	const mapArea = [
		{
			left: '0%',
			top: '0%',
			height: '50%',
			width: '100%'
		},
		{
			left: '50%',
			top: '50%',
			height: '50%',
			width: '50%'
		},
		{
			left: '0%',
			top: '50%',
			height: '50%',
			width: '50%'
		},
	];

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	},
		[playing]
	);



	useEffect(() => {
		const container = containerRef.current;
		const width = container.offsetWidth;
		const height = container.offsetHeight;
		console.log(`Container size: ${width}px x ${height}px`);

		console.log(vorlesebuch);
		console.log(pagedata);

		audio.addEventListener('ended', () => setPlaying(false));
		return () => {
			audio.removeEventListener('ended', () => setPlaying(false));
		};




	}, [slug, page, containerRef, playing, toggle]);



	return (
		<div>
		  <nav>
			<div ref={containerRef} className='imageContainer' style={{ position: "relative" }}>
			  {vorlesebuch && pagedata && (
				<div>
				  <img className='' src={baseUrl + slug + "/" + pagedata.img} alt="" />
				  <div onClick={toggle} style={{ position: "absolute", left: `${mapArea[0].left}`, top: "0%", width: "100%", height: "50%", backgroundColor: "rgba(0, 0, 0, .25)" }}></div>
				</div>
			  )}
			</div>
		  </nav>
		</div>
	  );
	  
};

export default ImageWithMap;
