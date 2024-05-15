export default function CheckOut() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total Amount $89.95</p>

      <div className="control-row">
        <div className="control">
          <label>Full Name</label>
          <input type="text" id="full-name" name="full-name" />
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

    </form>
  );
}
