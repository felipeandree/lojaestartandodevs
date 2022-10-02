
import Basket from "components/Basket";
import { useState } from 'react';
import { MainTitle, CartContainer, Main } from "./style";
import ProductsList from "../../components/ProductsList";
import data from "../../mocks/products/items"


export const Cart = () => {
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
      <MainTitle>Cart</MainTitle>
      <Main >
        <CartContainer >

          <Basket products={products} cartItems={cartItems}
            onAdd={onAdd}></Basket>
        </CartContainer>
      </Main>
    </>
  )

}

export default Cart