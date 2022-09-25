import React, { useState } from "react";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import MainCart from "../../components/MainCart";
import products  from "../../mocks/products/items"
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

                <MainCart items={products} />
            </CartContainer>
        </>
    )

}

export default Cart