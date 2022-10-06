// @ts-nocheck
import React, { useContext } from "react";
import ProductsList from "components/ProductsList";
import data from "../../mocks/products/items";
import { CartContext } from "../../contexts/cart";

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
      </>
  );
};

export default Shop;
