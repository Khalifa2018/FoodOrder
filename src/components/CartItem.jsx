import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import { CartContext } from "../store/CartContext";

export default function CartItem({ item }) {
  const cartContext = useContext(CartContext);

  function handleAddItem(item) {
    cartContext.addItem(item);
  }

  function handleRemoveItem(id) {
    cartContext.removeItem(id);
  }

  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} x{currencyFormatter.format(item.price)}
      </p>
      <div className="cart-item-actions">
        <button onClick={() => handleRemoveItem(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleAddItem(item)}>+</button>
      </div>
    </li>
  );
}
