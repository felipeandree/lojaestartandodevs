import React from 'react';
import { Card, CardBtn, AddProductCart, HeartPlus, CardLeft, CardImage, CardRating, StarRating, CardRight, Text } from "./styles";
import { MainProducts } from "../MainShop/styles";
import { products } from "../../mocks/products/items";
import { useParams } from "react-router-dom";


export default function ProductsList(props) {
  /* eslint-disable */
  const { items, category, onAdd } = props;
  /* eslint-enable */
  const { productName } = useParams()
  return (


    <MainProducts>
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

    </MainProducts>

  );
}