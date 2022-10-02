import React, { useState } from "react";
import Basket from "components/Basket";
import ProductsList from "components/ProductsList";

import data from "../../mocks/products/items";

export const Shop = () => {
  const { products } = data;
 
  return (
    <>
      <ProductsList products={products} />
     
    </>
  );

}

export default Shop
