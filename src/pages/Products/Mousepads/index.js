import React, { useState } from "react";
import { Header } from "../../../components/Header";
import { MenuMobile } from "../../../components/MenuMobile";
<<<<<<< HEAD
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
=======
import { MainTitle  } from "../styles";
import products from "../../../mocks/products/items";
import MainShop from "../../../components/MainShop";

>>>>>>> bb1453cc2fb2bec0a7174901664cf3e466d0f5f4

export const Mousepads = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
<<<<<<< HEAD
    
    <Body>
      

      
=======

   <>
>>>>>>> bb1453cc2fb2bec0a7174901664cf3e466d0f5f4
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible} />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <MainTitle>Mousepads</MainTitle>

<<<<<<< HEAD
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
     
=======
      <MainShop items={products} category={"Mousepads"} />
      </>
       
>>>>>>> bb1453cc2fb2bec0a7174901664cf3e466d0f5f4
  )

}

export default Mousepads