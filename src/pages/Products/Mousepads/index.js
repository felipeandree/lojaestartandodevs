import React, { useState } from "react";
import { Header } from "../../../components/Header";
import { MenuMobile } from "../../../components/MenuMobile";
import { products } from "../../../mocks/products/items"
import { MousepadTitle } from "./styles";
import {
  Body,
  Card,
  CardTitle,
  CardSection,
  CardImage,
  CardInformations,
} from "./styles";

export const Mousepads = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    
    <Body>
      

      
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible} />
      <Header setMenuIsVisible={setMenuIsVisible} />

        <MousepadTitle> Mousepads </MousepadTitle>

        {/* Filtros */}

      {products.length > 0 ? (
        <CardSection>

        {products.map((item) => {
          if (item.category === "Mousepads") {
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

export default Mousepads