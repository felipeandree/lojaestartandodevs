
import Basket from "components/Basket";
import data from "../../mocks/products/items";
import { useState } from 'react';
import {MainTitle, CartContainer, Main } from "./style";


export const Cart = () => {
    const { products } = data;
    // eslint-disable-next-line
    
    return (

        <>
            <MainTitle>Cart</MainTitle>
            <Main >
            <CartContainer >
                
                </CartContainer>
                </Main>
        </>
    )

}

export default Cart