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
} from "./style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const OffersBox = () => {
  return (
    <CardOffer className="homeSection">
      <SectionTitle><a href="/produtos">Ofertas</a></SectionTitle>

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
                            a partir de {item.price.toFixed(2)} R$
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

export default OffersBox