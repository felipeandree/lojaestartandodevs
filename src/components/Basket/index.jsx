import React, {useContext} from 'react';
import { CartBox, Buttons } from './styles';
import { CartContext } from "../../contexts/cart";
  
export default function Basket(props) {

  const { cartItems, onAdd, onRemove } = useContext(CartContext);
  
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <CartBox> 
      
      <h2>Itens no Carrinho</h2>
      <div>
        {cartItems.length === 0 && <div>O Carrinho está vazio</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
          <Buttons>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
                </button>
            
              </div>
            </Buttons>

            <div className="col-2 text-right">
              {item.qty} x R${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Preço do Item</div>
              <div className="col-1 text-right">R${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Imposto sobre item</div>
              <div className="col-1 text-right">R${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Frete</div>
              <div className="col-1 text-right">
                R${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </CartBox>
  );
}
