// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Header } from "../Header";
import { MenuMobile } from "../MenuMobile";
import { Main, MainTitle } from "./style";
import { products } from "../../mocks/products/items";
import Product from "../Product"

export default function ProductsList() {
  const { item } = products
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (

    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

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