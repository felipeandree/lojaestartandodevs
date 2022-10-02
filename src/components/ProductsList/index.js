// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Main, MainTitle } from "./styles";
import Product from "../Product";

export default function ProductsList(props) {

const { products, onAdd } = props
 
  return (

    <>

      <Main>

        <MainTitle>Loja</MainTitle>

        {products.map((product) => {

          return (

            < Product key={product.id} product={product} onAdd={onAdd}/>

          );

        })}

      </Main>
    </>

  );
}
