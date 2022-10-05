
import Basket from "components/Basket";
import { useState, useContext } from 'react';
import { MainTitle, CartContainer, Main } from "./style";
import { CartContext } from "../../contexts/cart";


export const Cart = () => {

  const {cartItems, onAdd, onRemove} = useContext(CartContext);


  return (

    <>
      <MainTitle>Cart</MainTitle>
      <Main >
        <CartContainer >

        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>
          
        </CartContainer>
      </Main>
    </>
  )

}

export default Cart