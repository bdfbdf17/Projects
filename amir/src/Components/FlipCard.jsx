import React, { useState } from 'react';

const FlipCard = ({ title, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3 id='title1'>{title}</h3>
        </div>
        <div className="flip-card-back">
          <p id='content'>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
