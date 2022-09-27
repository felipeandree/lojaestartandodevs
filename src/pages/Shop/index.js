import React, { useState } from "react";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import { MainTitle, } from "./style";
import { useParams } from "react-router-dom";
import MainShop from "../../components/MainShop";



export const Shop = () => {
  const { productName } = useParams()

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

      <MainTitle> {productName}</MainTitle>
        
      <MainShop/>
      
    </>
  );

}

export default Shop