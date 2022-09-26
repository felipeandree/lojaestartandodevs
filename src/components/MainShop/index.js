import React from "react";
// eslint-disable-next-line no-unused-vars
import { Swiper, SwiperSlide } from "swiper/react";
import { MainProducts } from "./styles"
import Product from './Products';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

export default function MainShop(props) {
    const { items, category, onAdd } = props;

    return (
        <>

            <MainProducts>

                <Swiper
                    slidesPerView={2}
                    pagination={false}
                    allowTouchMove={false}
                    grid={{
                        rows: 2,
                    }}
                    className='mySwiper'
                >
                    {items.map((item) => {
                        if (item.category === category)
                            return (
                                <Product key={item.id} item={item} onAdd={onAdd}></Product>
                            )
                        return null;
                    })}

                </Swiper>   

            </MainProducts>

        </>
    );
}
