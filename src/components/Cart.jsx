import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function Cart() {
  const { items, addItem, removeItem } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <p>
              {item.name} - {item.quantity} x ${item.price}
            </p>
            <div className="cart-item-actions">
              <button onClick={() => removeItem(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addItem(item)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="cart-total">${totalPrice}</p>
    </div>
  );
}
