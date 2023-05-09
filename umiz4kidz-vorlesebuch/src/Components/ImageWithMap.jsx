import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const ImageWithMap = () => {

	const [width, setWidth] = useState([]);
	const [height, setHeight] = useState([]);
	const navigate = useNavigate();
	const { slug } = useParams();

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

	const onMapClick = (area, index) => {
		const tip = `click map${index + 1}`;
		console.log(tip, area);
		alert(tip);
	}

	useEffect(() => {
		let twidth = document.querySelector('.imagewithmap').offsetWidth;
		let theight = document.querySelector('.imagewithmap').offsetHeight;
		setWidth(twidth);
		setHeight(theight);
		console.log({ twidth, theight });
	}, [slug]);	

	return (
		<div>
			<nav>
				<div className="whatever">
				<map name="primary">
  <area
    shape="rect"
    coords="75,75,75"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    target="_blank"
    alt="JavaScript" />
  
</map>
{console.log(width)}
{console.log(height)}
<img className='imagewithmap'
  useMap="#primary"
  src={img}
  alt="350 x 150 picture of two parrots" />
				</div>
			</nav>
		</div>
	);
};

export default ImageWithMap;
