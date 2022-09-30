import React, { useState } from "react";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import products from "../../mocks/products/items";
import CartContainer from "./style";

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

                <h1> Cart </h1>
            </CartContainer>
        </>
    )

}

export default Cart