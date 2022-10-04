import React, { useState } from "react";
import Basket from "components/Basket";
import ProductsList from "components/ProductsList";
import data from "../../mocks/products/items";
import OnAddComponent from "components/OnAddComponent";

export const Shop = () => {
  const { products } = data;
  
  // const { onAdd, onRemove, cartItems } = props

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
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