import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import vokabeljson from '../data/vokabeltrainer/vokabeln.json';
import Vorlesebuch from '../Pages/Vorlesebuch';

function WordTrainer() {
  const { slug } = useParams();

  let json = vokabeljson;

  let pagedate = vokabeljson[slug];
  

  const [isFrontDe, setIsFrontDe] = useState(true);
  const [isFrontHu, setIsFrontHu] = useState(true);
  const audioDe = new Audio('/sounds/01.mp3');
  const audioHu = new Audio('/sounds/02.mp3');

  const handleFlipDE = () => {
    audioHu.pause();
    audioHu.currentTime = 0;
    setIsFrontDe(!isFrontDe);
    if (isFrontDe) {
      audioDe.play();
    }
  };

  const handleFlipHU = () => {
    audioDe.pause();
    audioDe.currentTime = 0;
    setIsFrontHu(!isFrontHu);
    if (isFrontHu) {
      audioHu.play();
    }
  };

  return (
    <div className="grid-container">
      <div className="grid-item">
        <div className="vokabel">
          <div className="headimage">
            <img src="/images/apfel.jpg" alt="Apfel" />
          </div>
          <div className="scene scene--card">
            <div className={`card ${!isFrontDe ? 'is-flipped' : ''}`} onClick={handleFlipDE}>
              <div className="card__face card__face--front">
                <img src="/images/frontside.jpg" alt="Front Side" />
              </div>
              <div className="card__face card__face--back">
                <img src="/images/backside.jpg" alt="Back Side" />
              </div>
            </div>
          </div>
          <div className="scene scene--card secondCard">
            <div className={`card ${!isFrontHu ? 'is-flipped' : ''}`} onClick={handleFlipHU}>
              <div className="card__face card__face--front">
                <img src="/images/frontung.jpg" alt="Front Side" />
              </div>
              <div className="card__face card__face--back">
                <img src="/images/backung.jpg" alt="Back Side" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Repeat this grid item structure for your other items */}
    </div>
  );
}

export default WordTrainer;
