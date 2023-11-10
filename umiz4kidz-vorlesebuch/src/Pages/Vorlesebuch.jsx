import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageWithMapVB from '../Components/ImageWithMapVB';

const Vorlesebuch = () => {
  const [vorlesebuch, setVorlesebuch] = useState([]);
  const { slug } = useParams();
  let { page } = useParams();

  useEffect(() => {
    if (typeof page === 'undefined') {
      // Redirect to the default page, e.g., page 0
      window.location.href = `/vorlesebuecher/${slug}/0`;
    } else {
      const fetchVorlesebuch = async () => {
        let URL = `https://data.umiz4kids.at/books/${slug}/data.json`;
        let response = await fetch(URL);
        let data = await response.json();
        setVorlesebuch(data);
      };
      fetchVorlesebuch();
    }
  }, [slug, page]);

  return (
    <div className="container">
      <ImageWithMapVB vorlesebuch={vorlesebuch} />
    </div>
  );
};

export default Vorlesebuch;
