// @ts-nocheck
import { createContext, useState } from "react";

export const CartContext = createContext({
    
    cartItems: [],
    setCartItems: () => { },
    onAdd: () => { },
    onRemove: () => { },
});

export const CartContextProvider = ({ children }) => {


    const [cartItems, setCartItems] = useState([]);


    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    return (
        <CartContext.Provider
            value={{
                onAdd,
                onRemove,
                cartItems,
                setCartItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};