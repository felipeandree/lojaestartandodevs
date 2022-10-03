 // eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
 // eslint-disable-next-line no-unused-vars
import Basket from "components/Basket";
import ProductsList from "components/ProductsList";
import data from "../../mocks/products/items";
import OnAddComponent from "components/OnAddComponent";

export const Shop = (props) => {
  const { products } = data;
  const { onAdd, onRemove, cartItems } = props

  return (
    <>
      <ProductsList products={products} cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}/>

      <OnAddComponent
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></OnAddComponent>

    </>
  );

}

export default Shop