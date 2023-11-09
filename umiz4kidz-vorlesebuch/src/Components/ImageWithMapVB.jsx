import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageWithMapVB = ({ buch }) => {
  const { slug } = useParams();
  const { page } = useParams();
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const [audio, setAudio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  const baseUrl = 'https://data.umiz4kids.at/readingbooks/';
  const pagedata = buch[page];

  useEffect(() => {
    setAudio(new Audio(baseUrl + slug + '/' + page + '/01.mp3'));
    setIsPlaying(false);

    // Cleanup function
    return () => {
      audio.pause();
      setIsPlaying(false);
    };
  }, [slug, page]);

  const handleIncrementPage = () => {
    const nextPage = parseInt(page) + 1;
    if (nextPage < Object.keys(buch).length) {
      audio.pause();
      setIsPlaying(false);
      navigate(`/mitlesebuecher/${slug}/${nextPage}`);
    } else {
      navigate('/mitlesebuecher');
    }
  };

  const handleGoBack = () => {
    audio.pause();
    setIsPlaying(false);
    navigate(-1);
  };

  const handleDivClick = (index) => {
    index = index + 1;
    if (isPlaying) {
      if (audio.src.includes(`/0${index}.mp3`)) {
        // Clicked the same div again, pause the audio
        audio.pause();
        setIsPlaying(false);
        return;
      } else {
        // Clicked a different div, pause the current audio
        audio.pause();
      }
    }
    const newAudio = new Audio(baseUrl + slug + '/' + page + '/0' + index + '.mp3');
    setAudio(newAudio);
    setIsPlaying(true);
    newAudio.autoplay = true;
    console.log(`Div ${index} clicked`);
  };

  return (
    <div>
      <nav>
        <div ref={containerRef}>
          {buch && pagedata && (
            <div className="outerImageContainer">
              <div className="imageContainer">
                <img className="" src={baseUrl + slug + '/' + page + '/' + pagedata.img} alt="" />
                {buch[page]?.map.map((map, index) => (
                  <div
                    className="divWithHandCursor"
                    onClick={() => handleDivClick(index)}
                    style={{
                      position: 'absolute',
                      left: `${map.left}`,
                      top: `${map.top}`,
                      width: `${map.width}`,
                      height: `${map.height}`,
                    }}
                    key={index}
                  ></div>
                ))}
              </div>
              <div className="arrow right-arrow divWithHandCursor" onClick={handleIncrementPage}>
								<img src="/images/pfeilrechts.jpg" />
							</div>
							<div className="arrow left-arrow divWithHandCursor" onClick={handleGoBack}>
								<img src="/images/pfeillinks.jpg" />
							</div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default ImageWithMapVB;
