import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const UmizImage = (img) => {

	return (	
<img className='imagewithmap'
  useMap="#primary"
  src={img.image}
  alt="" />
	);
};

export default UmizImage;
