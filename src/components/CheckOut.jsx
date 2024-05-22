import { useContext } from "react";
import { CartContext } from "../store/CartContext.jsx";
import { submitOrder } from "../http.js";
import Modal from "./UI/Modal.jsx";
import Button from "./UI/Button.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Input from "./UI/Input.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function CheckOut() {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const cartTotal = cartContext.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  async function handleSubmit(event) {
    event.preventDefault();

    console.log("submitted");

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    const response = await submitOrder({
      items: cartContext.items,
      customer: data,
    });
  }

  function handleClose() {
    userProgressContext.hideCheckout();
  }

  return (
    <Modal
      open={userProgressContext.progress === "checkout"}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button type="submit">SubmitOrder</Button>
        </p>
      </form>
    </Modal>
  );
}
