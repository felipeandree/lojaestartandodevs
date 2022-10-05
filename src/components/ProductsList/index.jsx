// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Main, MainTitle } from "./styles";
import Product from "../Product";
import { CartContext } from "../../contexts/cart";


export default function ProductsList(props) {

  const { products } = props
  const { cartItems, onAdd, onRemove } = useContext(CartContext);
 
  return (

    <>

      <Main>

        <MainTitle>Loja</MainTitle>

        {products.map((product) => {

          return (

            < Product key={product.id} product={product} onAdd={onAdd} cartItems={cartItems}/>

          );

        })}

      </Main>
    </>

  );
}
