// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Main, MainTitle } from "./style";
import { products } from "../../mocks/products/items";
import Product from "../Product"

export default function ProductsList() {
  return (

    <>

      <Main>

        <MainTitle>Loja</MainTitle>

        {products.map((item) => {

          return (

            < Product item={item} />

          );

        })}

      </Main>
    </>

  );
}
