import { useContext } from "react";
import { CartContext } from "../meal-cart-context";
import { submitOrder } from "../http.js";

export default function CheckOut() {
  const { items } = useContext(CartContext);

  async function handleSubmit(event) {
    event.preventDefault();

    console.log("submitted");

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    const response = await submitOrder({items: items, customer: data});

    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total Amount $89.95</p>

      <div className="control-row">
        <div className="control">
          <label>Full Name</label>
          <input type="text" id="name" name="name" />
        </div>
      </div>

      <div className="control-row">
        <div className="control">
          <label>E-Mail Address</label>
          <input type="email" id="email" name="email" />
        </div>
      </div>

      <div className="control-row">
        <div className="control">
          <label>Street</label>
          <input type="text" id="street" name="street" />
        </div>
      </div>

      <div className="control-row">
        <div className="control">
          <label>Postal Code</label>
          <input type="text" id="postal-code" name="postal-code" />
        </div>
        <div className="control">
          <label>City</label>
          <input type="text" id="city" name="city" />
        </div>
      </div>

      <div className="control-row">
        <div className="control">
          <button type="button" className="text-button">Close</button>
        </div>
        <div className="control">
          <button type="submit" className="button">
            SubmitOrder
          </button>
        </div>
      </div>
    </form>
  );
}
