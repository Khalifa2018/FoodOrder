import { useContext } from "react";
import { CartContext } from "../meal-cart-context";

export default function Cart() {
  const { items, updateCartItemQuantity } = useContext(CartContext);
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
              <button onClick={() => updateCartItemQuantity(item.id, -1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateCartItemQuantity(item.id, 1)}>
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="cart-total">$500</p>
    </div>
  );
}
