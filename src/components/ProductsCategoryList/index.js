import React, { useState } from 'react';
import { Header } from "../Header";
import { MenuMobile } from "../MenuMobile";
import { Main, MainTitle } from "./style";
import { products } from "../../mocks/products/items";
import { useParams } from "react-router-dom";
import Product from "../Product";

export default function ProductsCategoryList() {

  const { productCategory } = useParams()
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

      <Main>

        <MainTitle>{productCategory}</MainTitle>

        {products.map((item) => {
          if (item.category.toUpperCase() === productCategory.toUpperCase()) {
            return (

              < Product item={item} />

            );
          } 
          return null;
        })}

      </Main>
    </>

  );
}