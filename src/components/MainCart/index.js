import React from "react";
import { CartTitle, CartBody, CartBottom } from "./styles"
import Product from './Products';

export default function MainCart(props) {
    const { items, onAdd } = props;

    return (
        <>
            < CartTitle>
                Seu Carrinho
            </CartTitle>
            <CartBody>
                {items.map((item) => {
                    if (item.type === "offers")
                        return (

                            <Product key={item.id} item={item} onAdd={onAdd}></Product>
                        )
                    return null;
                })}
            </CartBody>
            <CartBottom>

            </CartBottom>
        </>
    );
}
