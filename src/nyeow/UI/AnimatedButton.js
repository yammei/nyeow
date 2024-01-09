import React, { useState } from 'react';

const AnimatedButton = ({ className, idName, imgSrc, onClick }) => {
  const [isBulging, setIsBulging] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseOver = () => {
    setIsBulging(true);
  };

  const handleMouseOut = () => {
    setIsBulging(false);
  };

  const handleClick = () => {
    setIsClicked(true);
    onClick(); // The onClick function is executed
    setTimeout(() => {
      setIsClicked(false);
    }, 150);
  };

  const style = {
    cursor: 'pointer',
    scale: isClicked ? '0.9' : isBulging ? '1.1' : '1',
    transform: isClicked ? 'rotate(0)' : isBulging ? 'rotate(-2deg)' : 'rotate(0deg)',
    transition: 'scale 0.1s ease-in-out, transform 0.1s ease-in-out',
    filter: isClicked ? 'brightness(.95)' : isBulging ? 'brightness(1.05)' : 'brightness(1)',
    zIndex: '9999',
  };

  return (
    <img
      className= {className ?? null}
      id={idName ?? null}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick ?? null}
      style={style}
      src={imgSrc}
      draggable={'false'}
      alt={''}
    />
  );
};

export default AnimatedButton;
