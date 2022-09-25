import React, { useState } from "react";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import { BasketCart } from "../../components/BasketCart";
import { MainCart } from "../../components/MainCart";
import CartContainer from "./styles"



export const Cart = () => {


    const [menuIsVisible, setMenuIsVisible] = useState(false)
    return (

        <>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible} />
            <Header setMenuIsVisible={setMenuIsVisible} />
            <CartContainer>

                <MainCart />
                <BasketCart />
            </CartContainer>


        </>
    )

}

export default Cart