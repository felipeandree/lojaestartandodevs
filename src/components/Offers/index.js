import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../../mocks/products/items";
import {
  Card,
  CardBottom,
  CardImg,
  CardOffer,
  CardOfferSections,
  CardRight,
  CardTitle,
  SectionTitle,
} from "./styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import "../../assets/styles/global.css";

export const Offers = () => {
  return (
    <CardOffer className="homeSection">
      <SectionTitle>Ofertas</SectionTitle>
      
      {products.length > 0 ? (
        <CardOfferSections>
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            className='mySwiper'>
            
            {products.map((item) => {
              if (item.type === "offers") {
                return (
                  <SwiperSlide key={item.id}>
                    <Card>
                      <CardTitle>{item.name}</CardTitle>
                      <CardBottom>
                        <CardImg>
                          <img src={item.image} alt={item.alt} />
                        </CardImg>
                        <CardRight>
                          <p className='price'>
                            A partir de {item.price.toFixed(2)}
                          </p>
                          <p className='description'>{item.description}</p>
                        </CardRight>
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
