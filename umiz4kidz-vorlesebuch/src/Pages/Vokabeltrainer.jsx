import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WordTrainer from '../Components/WordTrainer';

const Vokabeltrainer = () => {

  const { slug } = useParams();

  useEffect(() => {
    if (typeof slug === 'undefined') {
      // Redirect to the default page, e.g., page 1
      window.location.href = `/vokabeltrainer/1`;
    } 
  }, [slug]);



  return (
    <div className="container">
      <WordTrainer />
    </div>
  );
};

export default Vokabeltrainer;