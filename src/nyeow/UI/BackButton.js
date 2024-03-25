import React, { useState } from 'react';

const BackButton = ({ onBackClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isAnimated, setIsAnimated] = useState(true);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const animationEnd = () => {
    setIsAnimated(false);
    console.log('Button load animation finished.');
  };

  const handleBackButton = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      onBackClick();
    }, 200);
  };

  const defaultStyles = {
    cursor: 'pointer',
    position: 'absolute',
    height: '35px',
    left: isClicked ? '70px' : isHovered ? '30px' : '35px',
    transform: isClicked ? 'rotate(0)' : isHovered ? 'rotate(-4deg)' : 'rotate(0deg)',
    transition: 'left 0.2s ease-in-out, transform 0.2s ease-in-out',
    filter: isClicked ? 'brightness(.95)' : isHovered ? 'brightness(1.05)' : 'brightness(1)',
    zIndex: '9999',
  };

  const animatedStyles = {
    animation: isAnimated ? 'pokeOut 0.2s ease-in-out' : 'none',
  };

  const styles = {
    ...defaultStyles,
    ...animatedStyles,
  };

  const defaultStyles2 = {
    position: 'absolute',
    height: '35px',
    left: isClicked ? '70px' : isHovered ? '30px' : '35px',
    transform: isClicked ? 'rotate(0)' : isHovered ? 'rotate(-4deg)' : 'rotate(0deg)',
    opacity: isClicked ? '0%' : '50%',
    transition: 'left 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.1s ease-in-out',
    filter: isClicked ? 'brightness(.95)' : isHovered ? 'brightness(1.05)' : 'brightness(1)',
    zIndex: '9999',
  };

  const styles2 = {
    ...defaultStyles2,
    ...animatedStyles,
  };


  return (
    <div id="back-button-container">
        <img
            id="back-button-shadow"
            src="/imgs/Back Button Shadow.png"
            style={styles2}
            alt=""
            onAnimationEnd={animationEnd}
            draggable="false"
        />
        <img
            id="back-button"
            src="/imgs/Back Bookmark Button.png"
            style={styles}
            alt=""
            onClick={handleBackButton}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onAnimationEnd={animationEnd}
            draggable="false"
        />
    </div>
  );
};

export default BackButton;
