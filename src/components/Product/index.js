import React from 'react';
// import { useParams } from "react-router-dom";

import {
  AddProductCart, Card, CardBtn, CardImage, CardLeft, CardRating, CardRight, HeartPlus, StarRating, Text
} from "./style";


export default function Product(props) {
  const { item, onAdd } = props;
  // const { productCategory, productName, productId } = useParams()

  return (

    <Card key={item.id}>
      <CardLeft >
        <CardImage>
          <img src={item.image} alt={item.alt} />
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
          <p>{item.name}</p>
          <p>{item.price.toFixed(2)} R$</p>
          <p>{item.description}</p>
        </Text>

        <CardBtn>
          <HeartPlus />
          <AddProductCart onClick={() => onAdd(item)} />
        </CardBtn>

      </CardRight>
    </Card>
  );
}