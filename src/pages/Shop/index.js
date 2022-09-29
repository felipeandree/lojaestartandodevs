// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductsList from "../../components/ProductsList";

export const Shop = () => {
  const [ cartItems, setCartItems ] = useState([])
  return (
    <>
      <ProductsList/>
    </>
  );

}

export default Shop