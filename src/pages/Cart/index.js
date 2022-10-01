import products from "../../mocks/products/items";
import {MainTitle, CartContainer, Main } from "./style";


export const Cart = () => {

    // eslint-disable-next-line
    const { items } = products;

    return (

        <>
            <MainTitle>Cart</MainTitle>
            <Main></Main>
            <CartContainer>

            </CartContainer>
        </>
    )

}

export default Cart