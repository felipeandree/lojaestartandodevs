import React, { useState } from 'react';
import { Header } from "../Header";
import { MenuMobile } from "../MenuMobile";
import { Main, MainTitle, MissingMessage, MissingProducts } from "./style";
import { products } from "../../mocks/products/items";
import { useParams } from "react-router-dom";
import Product from "../Product";
import { Footer } from "../Footer/index"

export default function ProductsCategoryList() {
  const { productCategory } = useParams()
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  let productList = products.map((item) => {
    if (item.category.toUpperCase() === productCategory.toUpperCase()) {
      return (

        < Product item={item} key={item.id} />
      );
    } return null;
  })

  let onlyAvailable = productList.filter(n => n)

  let upsellProductsRaw = products.slice(0, 4).map((item) => {
    return (
      < Product item={item} key={item.id} />
    )
  })

  
  let current = { onlyAvailable }
  console.log(current.onlyAvailable[0])

  let upsellProducts = upsellProductsRaw.filter((item) => !onlyAvailable.includes(item))

  function warningMessage() {
    if (onlyAvailable.length < 2) {
      return (
        <><MissingProducts>
          <MissingMessage>
            No momento não temos mais opçoes deste tipo de produto. Mas temos outras opções. Que tal dar uma olhadinha aqui em baixo?
          </MissingMessage>
        </MissingProducts>
          {upsellProducts}
        </>
      )
    }
  }

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

      <Main>

        <MainTitle>{productCategory}</MainTitle>

        {productList}

        {warningMessage()}

      </Main>

      <Footer />
    </>

  );
}