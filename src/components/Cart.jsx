import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const { items } = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  function handleCloseCart() {
    userProgressContext.hideCart();
  }

  function handleGoToCheckout() {
    userProgressContext.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressContext.progress === "cart"}
      onClose={userProgressContext.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
