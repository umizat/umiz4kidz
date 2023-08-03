import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageWithMapVB from '../Components/ImageWithMapVB';

const Mitlesebuch = () => {
  const [buch, setMitlesebuch] = useState([]);

  const { slug } = useParams();
  const { page } = useParams();

  useEffect(() => {
    const fetchMitlesebuch = async () => {
      let URL = `https://data.umiz4kids.at/readingbooks/${slug}/data.json`;
      let response = await fetch(URL);
      let data = await response.json();
      setMitlesebuch(data);
    };
    fetchMitlesebuch();
  }, [slug]);



  return (
    <div className="container">
      <ImageWithMapVB buch={buch} />
    </div>
  );
};

export default Mitlesebuch;
