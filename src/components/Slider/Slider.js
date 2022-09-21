import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import './Slider.css';
import "swiper/css";
import "swiper/css/navigation";



const Slides = [
  {
    url: "/img/banner-camisa.png",
    title: "Slide-1",
  },
  {
    url: "/img/banner-canecas.png",
    title: "Slide-2",
  },
  {
    url: "/img/banner-almofadas.png",
    title: "Slide-3",
  },
];



const SlidesComponent = ({ slides }) => {

  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide><img src={slides[0].url} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slides[1].url} alt=""/></SwiperSlide>
      <SwiperSlide><img src={slides[2].url} alt="" /></SwiperSlide>
    </Swiper>
  </>
   
  );
};

export { SlidesComponent, Slides };
