import React from "react";
import Product from "../Product";

const ProductCategoryList = ({ products, category }) => {
  return products
    .filter(
      (product) => product.category.toUpperCase() === category.toUpperCase()
    )
    .map((product) => <Product item={product} key={product.id} />);
};
export default ProductCategoryList;
