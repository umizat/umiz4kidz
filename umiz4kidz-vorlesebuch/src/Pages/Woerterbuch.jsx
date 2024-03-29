import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageWithMapWB from '../Components/ImageWithMapWB';

const Woerterbuch = () => {
  const [buch, setWoerterbuch] = useState([]);

  const { slug } = useParams();
  const { page } = useParams();

  useEffect(() => {
    if (typeof page === 'undefined') {
      // Redirect to the default page, e.g., page 0
      window.location.href = `/woerterbuecher/${slug}/0`;
    } else {
      const fetchWoerterbuch = async () => {
        let URL = `https://data.umiz4kids.at/dictionary/${slug}/data.json`;
        let response = await fetch(URL);
        let data = await response.json();
        setWoerterbuch(data);
      };
      fetchWoerterbuch();
    }
  }, [slug]);



  return (
    <div className="container">
      <ImageWithMapWB buch={buch} />
    </div>
  );
};

export default Woerterbuch;
