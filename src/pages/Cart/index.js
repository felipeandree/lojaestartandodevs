import React, { useState } from "react";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import { BasketCart } from "../../components/BasketCart";
import { MainCart } from "../../components/MainCart";


export const Cart = () => {


    const [menuIsVisible, setMenuIsVisible] = useState(false)
    return (

        <>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible} />
            <Header setMenuIsVisible={setMenuIsVisible} />
            <div>
                
                    <BasketCart />
                    <MainCart />
            </div>


        </>
    )

}

export default Cart