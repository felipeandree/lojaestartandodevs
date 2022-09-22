import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../../mocks/products";
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
import "./Categories.css"
import "../../assets/styles/global.css";

export const Categories = () => {
    return (
      <CardOffer>
      <SectionTitle>Categorias</SectionTitle>
      
      {products.length > 0 ? (
        <CardOfferSections>
          <Swiper
            slidesPerView={2}
            spaceBetween={5}
            className='mySwiper'
            >
            
            {products.map((item) => {
              if (item.type) {
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
              }
              return null;
            })}

          </Swiper>
        </CardOfferSections>
      ) : null}
    </CardOffer>
  );
};

  