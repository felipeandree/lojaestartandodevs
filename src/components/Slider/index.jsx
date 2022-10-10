import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


export const SlidesComponent = ({ slides }) => {

  return (
    <>
      
      <Swiper navigation={true} modules={[Navigation]} className="homeSection">
        
      <SwiperSlide><img src={slides[0].url} alt="" /></SwiperSlide>
      <SwiperSlide><img src={slides[1].url} alt=""/></SwiperSlide>
      <SwiperSlide><img src={slides[2].url} alt="" /></SwiperSlide>
    </Swiper>
  </>
   
  );
};


export default SlidesComponent;
