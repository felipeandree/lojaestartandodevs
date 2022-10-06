// @ts-nocheck
 // eslint-disable-next-line no-unused-vars
import Basket from "components/Basket";
import { useContext } from 'react';
import { MainTitle, CartContainer, Main } from "./style";
import { CartContext } from "../../contexts/cart";
import data from "../../mocks/products/items";

export const Cart = () => {
  const { products } = data;
    const { cartItems, setCartItems, onAdd, onRemove } = useContext(CartContext);

  return (

    <>
      <MainTitle>Cart</MainTitle>
      <Main >
        <CartContainer >

        <Basket products={products} cartItems={cartItems} setCartItems={setCartItems}onAdd={onAdd} onRemove={onRemove}></Basket>
          
        </CartContainer>
      </Main>
    </>
  )

}

export default Cart