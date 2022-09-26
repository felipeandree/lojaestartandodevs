import React, { useState } from "react";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import { products } from "../../mocks/products/items"
import { MainTitle } from "./styles";
import {
  Body,
  Card,
  CardTitle,
  CardSection,
  CardImage,
  CardInformations,
} from "./styles";
import { HeartPlus } from "../../components/MainShop/styles"
import { AddProductCart }  from "../../components/MainShop/styles";
import { StarRating } from "../../components/MainShop/styles"; 
import { useParams } from "react-router-dom";



export const Products = () => {
  const { productName } = useParams()

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <Body>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible} />
      <Header setMenuIsVisible={setMenuIsVisible} />
      
        <MainTitle> {productName}</MainTitle>

      {products.length > 0 ? (
        <CardSection>
  
        {products.map((item) => {
          if (item.category.toUpperCase() === productName.toUpperCase()) { 
            return (
  
              <Card> 
                  <CardImage>
                    <img src={item.image} alt={item.alt} />
                  </CardImage>
                  <CardTitle>
                    <CardInformations>
                      <p>{item.description}</p>
                      <p>{item.price.toFixed(2)}</p>
                      <p>{item.infomation}</p>
                      <AddProductCart /> 
                      <HeartPlus />
                      <StarRating /> <StarRating /> <StarRating /> <StarRating /> <StarRating />
                    </CardInformations>
                  </CardTitle>
              </Card>
            );
          }
          return null;
        })}
        </CardSection>
      ) : null}
      
     </Body>
       
  )

}

export default Products