import React from 'react';
import { useState } from "react";
import './Banner.css';

const slideStyles = {
  // borderRadius: "10px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "var(--primary-color)",
  zIndex: 1,
  cursor: "pointer",
  backgroundColor: "#24242400",
  textShadowColor: "var(--neutral-color-light)",
  textShadowOffset: {width: 3,
    height: 3,},
  textShadowRadius: 10,
  // fontSize:100,
  borderWidth:4,
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  
  
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "var(--primary-color)",
  zIndex: 1,
  cursor: "pointer",
  backgroundColor: "#24242400",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};
//NAVIGATION BUTTONS//
// const dotsContainerStyles = {
//   display: "flex",
//   justifyContent: "center",
// };

// const dotStyle = {
//   margin: "0 3px",
//   cursor: "pointer",
//   fontSize: "20px",
// };

const BannerComponent = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  //NAVIGATION BUTTONS//
  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      {/* <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default BannerComponent;
