import React, { useState } from "react";
import { Header } from "../../../components/Header";
import { MenuMobile } from "../../../components/MenuMobile";
import { MugsTitle } from "./styles";
import { Body } from "./styles";
import { Card } from "./styles"; 
import { CardImage } from "./styles";

export const Mousepads = () => {


  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (

    <Body>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible} />
      <Header setMenuIsVisible={setMenuIsVisible} />

        <MugsTitle> Mousepads </MugsTitle>

        {/* Filtros */}


        <Card>
          <CardImage>
           
          </CardImage>
        </Card>
    
     </Body>
  )

}

export default Mousepads