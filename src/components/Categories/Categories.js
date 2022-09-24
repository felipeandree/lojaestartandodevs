import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "../../mocks/categories";
import {
  Card,
  CardBottom,
  CardImg,
  CardOffer,
  CardOfferSections,
  CardTitle,
  SectionTitle,
} from "./styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import "./Categories.css"
import "../../assets/styles/global.css";

export const Categories = () => {
    return (
      <CardOffer className="homeSection">
      <SectionTitle>Categorias</SectionTitle>
      
      {categories.length > 0 ? (
        <CardOfferSections>
          <Swiper
            slidesPerView={2}
              pagination={false}
              allowTouchMove={ false }
            grid={{
              rows: 2,
            }}
            className='mySwiper'
            >
            
            {categories.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Card>
                      <CardTitle>{item.name}</CardTitle>
                      <CardBottom>
                        <CardImg>
                          <img src={item.image} alt={item.alt} />
                        </CardImg>
                      </CardBottom>
                    </Card>
                  </SwiperSlide>
                );
            })}

          </Swiper>
        </CardOfferSections>
      ) : null}
    </CardOffer>
  );
};

  