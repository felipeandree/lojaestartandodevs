import React, { useState } from "react";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import MainShop from "../../components/MainShop";
import products from "../../mocks/products/items"
import CartContainer from "./styles"

export const Cart = () => {

    // eslint-disable-next-line
    const { items } = products;
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    return (

        <>

            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible} />
            <Header setMenuIsVisible={setMenuIsVisible} />
            <CartContainer>

                <MainShop items={products} category={"Chaveiros"}/>
            </CartContainer>
        </>
    )

}

export default Cart