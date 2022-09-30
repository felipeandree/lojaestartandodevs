import React from "react";
import Product from "../Product";

const UpSellCategoryList = ({ products, category, qty = 6 }) => {
  return products
    .filter(
      (product) => product.category.toUpperCase() !== category.toUpperCase()
    )
    .slice(0, qty)
    .map((product) => <Product item={product} key={product.id} />);
};
export default UpSellCategoryList;
