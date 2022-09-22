import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// import axios from 'axios';
import { products } from "../../mocks/products";
import {
  CardOffer,
  CardOfferSections,
  SectionTitle,
  CardImg,
  Card,
  Price,
  CardTitle,
  CardBottom,
} from "./styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import "../../assets/styles/global.css";


export const Offers = () => {
  return (
    <CardOffer>
      <SectionTitle>
        Ofertas
      </SectionTitle>

      <CardOfferSections>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 4,
          //     spaceBetween: 40,
          //   },
          //   1024: {
          //     slidesPerView: 5,
          //     spaceBetween: 50,
          //   },
          // }}
          modules={[Navigation, Pagination]}
          navigation
          className='mySwiper'
        >
          <SwiperSlide>
            {products.map((item) => {
              return (
                <Card key={item.id}>
                  <CardTitle>{item.name}</CardTitle>
                  <CardBottom>
                    <CardImg>
                      <img src={item.image} alt={item.alt} />
                    </CardImg>

                    <Price>
                      <p className='price'>
                        A partir de {item.price.toFixed(2)}
                      </p>
                      <p className='description'>{item.description}</p>
                    </Price>
                  </CardBottom>
                </Card>
              );
            })}
          </SwiperSlide>
        </Swiper>
      </CardOfferSections>
    </CardOffer>
  );
};
