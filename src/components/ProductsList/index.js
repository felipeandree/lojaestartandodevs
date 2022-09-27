import React from 'react';
import {
  AddProductCart, Card, CardBtn, CardImage, CardLeft, CardRating, CardRight, HeartPlus, Main, StarRating, Text
} from "./style";
import { products } from "../../mocks/products/items";
import { useParams } from "react-router-dom";


export default function ProductsList(props) {
  /* eslint-disable */
  const { items, category, onAdd } = props;
  /* eslint-enable */
  const { productName } = useParams()
  return (


    <Main>
      {products.map((item) => {
        if (item.category.toUpperCase() === productName.toUpperCase()) {
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
        return null;
      })}

    </Main>

  );
}