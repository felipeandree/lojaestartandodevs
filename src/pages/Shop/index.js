import React, {useState} from "react";
import ProductsList from "../../components/ProductsList";
import data from "../../mocks/products/items";
  
export const Shop = () => {
  const { products } = data;
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
  return (
    <>
      <ProductsList onAdd={onAdd} products={products} />

      
    </>
  );

}

export default Shop
