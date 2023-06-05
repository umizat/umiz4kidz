import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageWithMap from '../Components/ImageWithMap';

const Vorlesebuch = () => {
  const [vorlesebuch, setVorlesebuch] = useState([]);

  const { slug } = useParams();
  const { page } = useParams();

  useEffect(() => {
    const fetchVorlesebuch = async () => {
      let URL = `https://data.umiz4kids.at/books/${slug}/data.json`;
      let response = await fetch(URL);
      let data = await response.json();
      setVorlesebuch(data);
    };
    fetchVorlesebuch();
  }, [slug]);



  return (
    <div className="container">
      <ImageWithMap vorlesebuch={vorlesebuch} />
    </div>
  );
};

export default Vorlesebuch;
