import React, { useState } from "react";
import { Header } from "../../../components/Header";
import { MenuMobile } from "../../../components/MenuMobile";
import { MainTitle  } from "../styles";
import products from "../../../mocks/products/items";
import MainShop from "../../../components/MainShop";



export const Caps = () => {


    const [menuIsVisible, setMenuIsVisible] = useState(false)
    return (

        <>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible} />
            <Header setMenuIsVisible={setMenuIsVisible} />
            <MainTitle>Bonés</MainTitle>

            <MainShop items={products} category={"Bonés"} />
        </>
    )

}

export default Caps