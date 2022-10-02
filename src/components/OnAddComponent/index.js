import { useState } from 'react';
import data from '../../mocks/products/items';

const OnAddComponent = () => {
    const [cartItems, setCartItems] = useState([]);
    const { products } = data;

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
}

export default OnAddComponent;