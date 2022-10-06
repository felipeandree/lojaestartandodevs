// @ts-nocheck
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../contexts/cart";

import {
  AddProductCart, Card, CardBtn, CardImage, CardLeft, CardRating, CardRight, HeartPlus, StarRating, Text
} from "./styles";


export default function Product(props) {
  const { product } = props;

  const {  onAdd } = useContext(CartContext);
  // const { productCategory, productName, productId } = useParams()

  return (

    <Card key={product.id}>
      <CardLeft >
        <CardImage>
          <img src={product.image} alt={product.alt} />
        </CardImage>
        <CardRating>
          <StarRating />
          <StarRating />
          <StarRating />
          <StarRating />
          <StarRating />
        </CardRating>
      </CardLeft>

      <CardRight>

        <Text>
          <p>{product.name}</p>
          <p>{product.price.toFixed(2)} R$</p>
          <p>{product.description}</p>
        </Text>

        <CardBtn>
          <HeartPlus />
          <Link onClick={() => onAdd(product)}><AddProductCart/></Link>
        </CardBtn>

      </CardRight>
    </Card>
  );
}