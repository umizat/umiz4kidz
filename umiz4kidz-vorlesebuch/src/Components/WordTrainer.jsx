import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import vokabeljson from '../data/vokabeltrainer/vokabeln.json';


function WordTrainer() {
  const { slug } = useParams();
  let page = vokabeljson[slug];
  const navigate = useNavigate();
  const delay = 3000;

  let lektion = Math.floor(slug/10) + 1;


  const maxPages = Object.keys(vokabeljson).length;

  const [isFrontDe1, setIsFrontDe1] = useState(true);
  const [isFrontDe2, setIsFrontDe2] = useState(true);
  const [isFrontDe3, setIsFrontDe3] = useState(true);
  const [isFrontDe4, setIsFrontDe4] = useState(true);
  const [isFrontHu1, setIsFrontHu1] = useState(true);
  const [isFrontHu2, setIsFrontHu2] = useState(true);
  const [isFrontHu3, setIsFrontHu3] = useState(true);
  const [isFrontHu4, setIsFrontHu4] = useState(true);
  const baseUrl = 'https://data.umiz4kids.at/vocabulary/';

  const audioDe1 = new Audio(baseUrl + page[1].pronunciations[0]);
  const audioDe2 = new Audio(baseUrl + page[2].pronunciations[0]);
  const audioDe3 = new Audio(baseUrl + page[3].pronunciations[0]);
  const audioDe4 = new Audio(baseUrl + page[4].pronunciations[0]);
  const audioHu1 = new Audio(baseUrl + page[1].pronunciations[1]);
  const audioHu2 = new Audio(baseUrl + page[2].pronunciations[1]);
  const audioHu3 = new Audio(baseUrl + page[3].pronunciations[1]);
  const audioHu4 = new Audio(baseUrl + page[4].pronunciations[1]);

  const image1 = baseUrl + page[1].images[0];
  const image2 = baseUrl + page[2].images[0];
  const image3 = baseUrl + page[3].images[0];
  const image4 = baseUrl + page[4].images[0];

  const descDe1 = baseUrl + page[1].descriptions[0];
  const descDe2 = baseUrl + page[2].descriptions[0];
  const descDe3 = baseUrl + page[3].descriptions[0];
  const descDe4 = baseUrl + page[4].descriptions[0];
  const descHu1 = baseUrl + page[1].descriptions[1];
  const descHu2 = baseUrl + page[2].descriptions[1];
  const descHu3 = baseUrl + page[3].descriptions[1];
  const descHu4 = baseUrl + page[4].descriptions[1];


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleFlipDE1 = () => {
    audioHu1.pause();
    audioHu1.currentTime = 0;
    setIsFrontDe1(!isFrontDe1);
    if (isFrontDe1) {
      audioDe1.play();
    }
    setTimeout(() => {
      setIsFrontDe1(true); // This will flip back after the specified delay
    }, delay);
  };
  const handleFlipDE2 = () => {
    audioHu2.pause();
    audioHu2.currentTime = 0;
    setIsFrontDe2(!isFrontDe2);
    if (isFrontDe2) {
      audioDe2.play();
    }
    setTimeout(() => {
      setIsFrontDe2(true); // This will flip back after the specified delay
    }, delay);
  };
  const handleFlipDE3 = () => {
    audioHu3.pause();
    audioHu3.currentTime = 0;
    setIsFrontDe3(!isFrontDe3);
    if (isFrontDe3) {
      audioDe3.play();
    }
    setTimeout(() => {
      setIsFrontDe3(true); // This will flip back after the specified delay
    }, delay);
  };
  const handleFlipDE4 = () => {
    audioHu4.pause();
    audioHu4.currentTime = 0;
    setIsFrontDe4(!isFrontDe4);
    if (isFrontDe4) {
      audioDe4.play();
    }
    setTimeout(() => {
      setIsFrontDe4(true); // This will flip back after the specified delay
    }, delay);
  };

  const handleFlipHU1 = () => {
    audioDe1.pause();
    audioDe1.currentTime = 0;
    setIsFrontHu1(!isFrontHu1);
    if (isFrontHu1) {
      audioHu1.play();
    }
    setTimeout(() => {
      setIsFrontHu1(true); // This will flip back after the specified delay
    }, delay);
  };

  const handleFlipHU2 = () => {
    audioDe2.pause();
    audioDe2.currentTime = 0;
    setIsFrontHu2(!isFrontHu2);
    if (isFrontHu2) {
      audioHu2.play();
    }
    setTimeout(() => {
      setIsFrontHu2(true); // This will flip back after the specified delay
    }, delay);
  };

  const handleFlipHU3 = () => {
    audioDe3.pause();
    audioDe3.currentTime = 0;
    setIsFrontHu3(!isFrontHu3);
    if (isFrontHu3) {
      audioHu3.play();
    }
    setTimeout(() => {
      setIsFrontHu3(true); // This will flip back after the specified delay
    }, delay);
  };

  const handleFlipHU4 = () => {
    audioDe4.pause();
    audioDe4.currentTime = 0;
    setIsFrontHu4(!isFrontHu4);
    if (isFrontHu4) {
      audioHu4.play();
    }
    setTimeout(() => {
      setIsFrontHu4(true); // This will flip back after the specified delay
    }, delay);
  };

  const handleIncrementPage = () => {
    const nextPage = parseInt(slug) + 1;
    console.log(vokabeljson);
    if (nextPage < maxPages+1) {
      navigate(`/vokabeltrainer/${nextPage}`);
    } else {
      navigate('/vokabeltrainer/1');
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="vbgrid">
        <div className="vbgrid-side divWithHandCursor" onClick={handleGoBack}>
          <span className='arrows'>&lt;</span>
        </div>
        <div className="vbgrid-center">
          <h2>Lektion {lektion}:</h2>
          <div className="grid-container">
            <div className="grid-item">
              <div className="vokabel">
                <div className="flags">
                  <div className="scene scene--card">
                    <div className={`card ${!isFrontDe1 ? 'is-flipped' : ''}`} onClick={handleFlipDE1}>
                      <div className="card__face card__face--front">
                        <img src="/images/frontDe.jpg" alt="Front Side" />
                      </div>
                      <div className="card__face card__face--back">
                        <img src={descDe1} alt="Back Side" />
                      </div>
                    </div>
                  </div>
                  <div className="scene scene--card secondCard">
                    <div className={`card ${!isFrontHu1 ? 'is-flipped' : ''}`} onClick={handleFlipHU1}>
                      <div className="card__face card__face--front">
                        <img src="/images/frontHu.jpg" alt="Front Side" />
                      </div>
                      <div className="card__face card__face--back">
                        <img src={descHu1} alt="Back Side" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="headimage">
                  <img src={image1} alt="" />
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="vokabel">
                <div className="flags">
                  <div className="scene scene--card">
                    <div className={`card ${!isFrontDe2 ? 'is-flipped' : ''}`} onClick={handleFlipDE2}>
                      <div className="card__face card__face--front">
                        <img src="/images/frontDe.jpg" alt="Front Side" />
                      </div>
                      <div className="card__face card__face--back">
                        <img src={descDe2} alt="Back Side" />
                      </div>
                    </div>
                  </div>
                  <div className="scene scene--card secondCard">
                    <div className={`card ${!isFrontHu2 ? 'is-flipped' : ''}`} onClick={handleFlipHU2}>
                      <div className="card__face card__face--front">
                        <img src="/images/frontHu.jpg" alt="Front Side" />
                      </div>
                      <div className="card__face card__face--back">
                        <img src={descHu2} alt="Back Side" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="headimage">
                  <img src={image2} alt="Apfel" />
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="vokabel">
                <div className="flags">
                  <div className="scene scene--card">
                    <div className={`card ${!isFrontDe3 ? 'is-flipped' : ''}`} onClick={handleFlipDE3}>
                      <div className="card__face card__face--front">
                        <img src="/images/frontDe.jpg" alt="Front Side" />
                      </div>
                      <div className="card__face card__face--back">
                        <img src={descDe3} alt="Back Side" />
                      </div>
                    </div>
                  </div>
                  <div className="scene scene--card secondCard">
                    <div className={`card ${!isFrontHu3 ? 'is-flipped' : ''}`} onClick={handleFlipHU3}>
                      <div className="card__face card__face--front">
                        <img src="/images/frontHu.jpg" alt="Front Side" />
                      </div>
                      <div className="card__face card__face--back">
                        <img src={descHu3} alt="Back Side" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="headimage">
                  <img src={image3} alt="Apfel" />
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="vokabel">
                <div className="flags">
                  <div className="scene scene--card">
                    <div className={`card ${!isFrontDe4 ? 'is-flipped' : ''}`} onClick={handleFlipDE4}>
                      <div className="card__face card__face--front">
                        <img src="/images/frontDe.jpg" alt="Front Side" />
                      </div>
                      <div className="card__face card__face--back">
                        <img src={descDe4} alt="Back Side" />
                      </div>
                    </div>
                  </div>
                  <div className="scene scene--card secondCard">
                    <div className={`card ${!isFrontHu4 ? 'is-flipped' : ''}`} onClick={handleFlipHU4}>
                      <div className="card__face card__face--front">
                        <img src="/images/frontHu.jpg" alt="Front Side" />
                      </div>
                      <div className="card__face card__face--back">
                        <img src={descHu4} alt="Back Side" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="headimage">
                  <img src={image4} alt="Apfel" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vbgrid-side divWithHandCursor" onClick={handleIncrementPage}>
          <span className='arrows'>&gt;</span>
        </div>
      </div>
    </div>
  );
}

export default WordTrainer;
