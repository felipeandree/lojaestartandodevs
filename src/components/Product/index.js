import React from 'react';

import {
  AddProductCart, Card, CardBtn, CardImage, CardLeft, CardRating, CardRight, HeartPlus, StarRating, Text
} from "./styles";


export default function Product(props) {
  const { products, onAdd } = props;
  // const { productCategory, productName, productId } = useParams()

  return (

    <Card key={products.id}>
      <CardLeft >
        <CardImage>
          <img src={products.image} alt={products.alt} />
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
          <p>{products.name}</p>
          <p>{products.price.toFixed(2)} R$</p>
          <p>{products.description}</p>
        </Text>

        <CardBtn>
          <HeartPlus />
          <AddProductCart onClick={() => onAdd(products)}/>
        </CardBtn>

      </CardRight>
    </Card>
  );
}