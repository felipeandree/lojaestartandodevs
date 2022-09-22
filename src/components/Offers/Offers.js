import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// import axios from 'axios';
import { products } from '../../mocks/products';
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
import "./styles.css";

const fotoOferta = [
  {
    url: "/img/mousepad.png",
    title: "Ofetra-1",
  },
  {
    url: "/img/chaveiro.png",
    title: "Oferta-2",
  },
  {
    url: "/img/caneca.png",
    title: "Oferta-3",
  },
];


export const Offers = () => {
  return (
    <CardOffer>
      <SectionTitle>
        <h2>Ofertas</h2>
      </SectionTitle>

      <CardOfferSections>
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 2,
            },
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
          {products.map((item) => {
          return (
            <Card>
              <CardTitle>{item.name}</CardTitle>
              <CardBottom>
                <CardImg>
                  <img
                    src={item.image}
                    alt={item.alt}
                  />
                </CardImg>

                <Price>
                  <p className='info'>{item.price}</p>
                  <p className='slogan'>{item.description}</p>
                </Price>
              </CardBottom>
            </Card>
           
          );
        })}
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardTitle>Chaveiro Devs</CardTitle>
              <CardBottom>
                <CardImg>
                  <img
                    src={fotoOferta[1].url}
                    alt='Mousepad Light Estartando Devs'
                  />
                </CardImg>

                <Price>
                  <p className='info'>A partir de R$19,90</p>
                  <p className='slogan'>Desenvolva com estilo!</p>
                </Price>
              </CardBottom>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardTitle>Caneca Back</CardTitle>
              <CardBottom>
                <CardImg>
                  <img
                    src={fotoOferta[2].url}
                    alt='Mousepad Light Estartando Devs'
                  />
                </CardImg>

                <Price>
                  <p className='info'>A partir de R$19,90</p>
                  <p className='slogan'>Desenvolva com estilo!</p>
                </Price>
              </CardBottom>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardTitle>Chaveiro Devs II</CardTitle>
              <CardBottom>
                <CardImg>
                  <img
                    src={fotoOferta[1].url}
                    alt='Mousepad Dark Estartando Devs'
                  />
                </CardImg>
                <Price>
                  <p className='info'>A partir de R$19,90</p>
                  <p className='slogan'>Desenvolva com estilo!</p>
                </Price>
              </CardBottom>
            </Card>
          </SwiperSlide>
        </Swiper>
      </CardOfferSections>
    </CardOffer>
  );
};
