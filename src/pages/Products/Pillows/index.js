import React, { useState } from "react";
import { Header } from "../../../components/Header";
import { MenuMobile } from "../../../components/MenuMobile";
import { MainTitle  } from "../styles";
import products from "../../../mocks/products/items";
import MainShop from "../../../components/MainShop";

export const Pillows = () => {


    const [menuIsVisible, setMenuIsVisible] = useState(false)
    return (

        <>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible} />
            <Header setMenuIsVisible={setMenuIsVisible} />
            <MainTitle>Almofadas</MainTitle>

            <MainShop items={products} category={"Almofadas"} />
        </>
    )

}

export default Pillows