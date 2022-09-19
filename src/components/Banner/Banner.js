import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import './Banner.css';
import "swiper/css";
import "swiper/css/navigation";


const slides = [
  {
    url: "http://localhost:3000/img/banner-camisa.png",
    title: "Slide-1",
  },
  {
    url: "http://localhost:3000/img/banner-canecas.png",
    title: "Slide-2",
  },
  {
    url: "http://localhost:3000/img/banner-almofadas.png",
    title: "Slide-3",
  },
];



const BannerComponent = ({ slides }) => {

  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide><img src={slides[1].url} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slides[0].url} alt=""/></SwiperSlide>
      <SwiperSlide><img src={slides[2].url} alt="" /></SwiperSlide>
    </Swiper>
  </>
   
  );
};

export { BannerComponent, slides };
