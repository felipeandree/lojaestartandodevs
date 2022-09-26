import React from 'react';
//eslint-disable-next-line no-unused-vars
import { Swiper, SwiperSlide } from "swiper/react";
import {  Card, CardBtn, CardTop, CardBottom, AddProductCart, HeartPlus } from "./styles"



export default function Product(props) {
  const { item, onAdd } = props;
  return (


    <SwiperSlide key={item.id}>
      <Card>
      <CardTop >
        <img className="small" src={item.image}
          alt={item.name} />
      </CardTop>
      <CardBottom>
        <div>{item.name}</div>
          <div>{item.price.toFixed(2)} R$</div>
          <div>{item.description}</div>
        <CardBtn>
            <HeartPlus/>
            <AddProductCart onClick={() => onAdd(item)} />
            {/* <button onClick={() => onAdd(item)}>Adicionar ao Carrinho</button> */}
        </CardBtn>
        </CardBottom>
        </Card>
    </SwiperSlide>
  );
}