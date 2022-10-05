import React, { useState, useContext } from "react";
import ProductsList from "components/ProductsList";
import data from "../../mocks/products/items";
import { CartContext } from "../../contexts/cart";
import Basket from "components/Basket";

export const Shop = () => {
  const { products } = data;

  const { cartItems, onAdd, onRemove } = useContext(CartContext);

  return (
    <>
      <ProductsList
        products={products}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />

      <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>
    
      </>
  );
};

export default Shop;
