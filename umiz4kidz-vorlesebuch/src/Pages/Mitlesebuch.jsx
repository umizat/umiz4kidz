import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageWithMapMB from '../Components/ImageWithMapMB';

const Mitlesebuch = () => {
  const [buch, setMitlesebuch] = useState([]);

  const { slug } = useParams();
  const { page } = useParams();

  useEffect(() => {
    if (typeof page === 'undefined') {
      // Redirect to the default page, e.g., page 0
      window.location.href = `/mitlesebuecher/${slug}/0`;
    } else {
      const fetchMitlesebuch = async () => {
        let URL = `https://data.umiz4kids.at/readingbooks/${slug}/data.json`;
        let response = await fetch(URL);
        let data = await response.json();
        setMitlesebuch(data);
      };
      fetchMitlesebuch();
    }
  }, [slug]);



  return (
    <div className="container">
      <ImageWithMapMB buch={buch} />
    </div>
  );
};

export default Mitlesebuch;
