<<<<<<< HEAD:src/components/Banner/Banner.js
import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  // borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
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

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

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
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
=======
import React from 'react';
import bannerCamisa from '../../assets/images/img/banner-camisa.png';
import './styles.css';
import 'material-symbols';

export function Banner() {
    return (
        <div className='banner-camisa'>
            <img src={bannerCamisa} alt='Baner camisa Estartando Devs' />
>>>>>>> master:src/components/Banner/index.js
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerComponent;
