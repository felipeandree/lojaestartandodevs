import React, { useState } from "react";
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