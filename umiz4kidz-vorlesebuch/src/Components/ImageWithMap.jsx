import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UmizImage from './UmizImage';


const ImageWithMap = ({ vorlesebuch }) => {

	const [width, setWidth] = useState([]);
	const [height, setHeight] = useState([]);
	const [image, setImage] = useState([])

	const navigate = useNavigate();
	const { slug } = useParams();
	const { page } = useParams();
	const containerRef = useRef(null);

	const url = "http:///localhost:3000/assets/vlb/dga/d01.mp3";

	const [audio] = useState(new Audio(url));
	const [playing, setPlaying] = useState(false);
	const toggle = () => setPlaying(!playing);


	const img = "http://360demo.chilicode.com/umiz/vlb/dga/dga_0.jpeg"


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

		audio.addEventListener('ended', () => setPlaying(false));
		return () => {
		  audio.removeEventListener('ended', () => setPlaying(false));
		};
	}, [slug, page, containerRef, playing, toggle]);



	return (
		<div>
			<nav>
				<div ref={containerRef} className='imageContainer' style={{ position: "relative" }}>
					<img className='' src={img} alt="" />
						<div onClick={toggle} style={{ position: "absolute", left: `${mapArea[0].left}`, top: "0%", width: "100%", height: "50%", backgroundColor: "rgba(0, 0, 0, .25)" }}></div>
				</div>
			</nav>
		</div>
	);
};

export default ImageWithMap;
