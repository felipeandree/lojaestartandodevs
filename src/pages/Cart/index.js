import products from "../../mocks/products/items";
import CartContainer from "./style";

export const Cart = () => {
    
    // eslint-disable-next-line
    const { items } = products;
    
    return (

        <>
            <CartContainer>

                <h1> Cart </h1>
            </CartContainer>
        </>
    )

}

export default Cart