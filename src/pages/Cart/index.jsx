
import Basket from "components/Basket";
import { useState } from 'react';
import { MainTitle, CartContainer, Main } from "./style";
import ProductsList from "../../components/ProductsList";
import OnAddComponent from "components/OnAddComponent";


export const Cart = (props) => {
  const { products, onAdd, onRemove, cartItems } = props

  return (

    <>
      <MainTitle>Cart</MainTitle>
      <Main >
        <CartContainer >
{/* 
          <Basket cartItems={cartItems}
            onAdd={onAdd} onRemove={onRemove}>
          </Basket> */}

<OnAddComponent
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></OnAddComponent>

          
        </CartContainer>
      </Main>
    </>
  )

}

export default Cart