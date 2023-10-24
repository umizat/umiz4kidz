import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import vokabeljson from '../data/vokabeltrainer/vokabeln.json';


const Vokabeltrainer = () => {
  const [buch, setVokabeltrainer] = useState([]);

  const { slug } = useParams();
  const { page } = useParams();

  useEffect(() => {

  }, [slug]);



  return (
    <div className="container">
      <WordTrainer page={slug} />
    </div>
  );
};

export default Vokabeltrainer;
