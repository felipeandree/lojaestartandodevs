import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { categories } from "../../mocks/products/categories";
import {
  Card,
  CardBottom,
  CardImg,
  CardOffer,
  CardOfferSections,
  CardTitle,
  SectionTitle,
  CardTop,
} from "./styles";
import { Link } from 'react-router-dom'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

export const CategoriesBox = () => {
  return (
    <CardOffer className="homeSection">
      <SectionTitle>Categorias</SectionTitle>

      {categories.length > 0 ? (
        <CardOfferSections>
          <Swiper
            slidesPerView={2}
            pagination={false}
            allowTouchMove={false}
            grid={{
              rows: 2,
            }}
            className='mySwiper'
          >

            {categories.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Card>
                      <CardTop>
                      <CardTitle><Link to={item.url}>{item.name}</Link></CardTitle>
                      </CardTop>
                    <CardBottom>
                      <CardImg>
                      <Link to={item.url}><img src={item.image} alt={item.alt} /></Link>
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

