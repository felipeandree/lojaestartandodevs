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

  let upsellProducts = upsellProductsRaw.filter((name) => !onlyAvailable.includes(name))

  function warningMessage() {
    if (onlyAvailable.length < 2) {
      return (
        <><MissingProducts>
          <MissingMessage>
            Estamos sem mais opções no momento. Mas temos outras opções como estas abaixo. {"\n"}Que tal dar uma olhadinha?
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