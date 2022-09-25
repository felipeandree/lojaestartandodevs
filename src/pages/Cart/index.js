import React, { useState } from "react";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
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
            </CartContainer>


        </>
    )

}

export default Cart