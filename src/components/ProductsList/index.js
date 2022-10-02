// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Main, MainTitle } from "./styles";
import Product from "../Product";

export default function ProductsList(props) {

const { products } = props
 
  return (

    <>

      <Main>

        <MainTitle>Loja</MainTitle>

        {products.map((products) => {

          return (

            < Product key={products.id} products={products} />

          );

        })}

      </Main>
    </>

  );
}
