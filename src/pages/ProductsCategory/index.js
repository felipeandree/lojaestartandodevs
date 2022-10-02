import React from "react";

import { Main, MainTitle } from "./style";
import data from "../../mocks/products/items";
import { useParams } from "react-router-dom";
import WarningMessage from "../../components/WarningMessage";
import ProductCategoryList from "../../components/ProductCategoryList";
import UpSellCategoryList from "../../components/UpSellCategoryList";

export default function ProductsCategoryList() {
  const { products } = data;
  const { productCategory } = useParams();
  return (
    <>
      <Main>
        <MainTitle>{productCategory}</MainTitle>
        <ProductCategoryList products={products} category={productCategory} />
        <WarningMessage
          message=" No momento não temos mais opções deste tipo de produto. Mas temos
           outras, que tal dar uma olhadinha aqui em baixo.."
        >
          <UpSellCategoryList
            products={products}
            category={productCategory}
            qty={4}
          />
        </WarningMessage>
      </Main>
    </>
  );
}
