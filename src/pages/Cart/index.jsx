 // eslint-disable-next-line no-unused-vars
import Basket from "components/Basket";
 // eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { MainTitle, CartContainer, Main } from "./style";
 // eslint-disable-next-line no-unused-vars
import ProductsList from "../../components/ProductsList";


export const Cart = () => {
  // const { products, onAdd, onRemove, cartItems } = props

  return (

    <>
      <MainTitle>Cart</MainTitle>
      <Main >
        <CartContainer >
{/* 
          <Basket cartItems={cartItems}
            onAdd={onAdd} onRemove={onRemove}>
          </Basket> */}

          
        </CartContainer>
      </Main>
    </>
  )

}

export default Cart