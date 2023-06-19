import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageWithMap from '../Components/ImageWithMap';

const Woerterbuch = () => {
  const [woerterbuch, setWoerterbuch] = useState([]);

  const { slug } = useParams();
  const { page } = useParams();

  useEffect(() => {
    const fetchWoerterbuch = async () => {
      let URL = `https://data.umiz4kids.at/books/${slug}/data.json`;
      let response = await fetch(URL);
      let data = await response.json();
      setWoerterbuch(data);
    };
    fetchWoerterbuch();
  }, [slug]);



  return (
    <div className="container">
      <ImageWithMap woerterbuch={woerterbuch} />
    </div>
  );
};

export default Woerterbuch;
