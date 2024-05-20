import { useContext, useRef } from "react";
import logoUrl from "../assets/logo.jpg";
import Modal from "./Modal";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import { CartContext } from "../store/meal-cart-context";

export default function Header() {
  const { items } = useContext(CartContext);

  const cartModal = useRef();
  const checkOutModal = useRef();

  function handleOpenCartClick() {
    cartModal.current.open();
  }

  function handleCheckOutClick() {
    checkOutModal.current.open();
  }

  const modalCartActions = (
    <>
      <button className="text-button">Close</button>
      <button className="button" onClick={handleCheckOutClick}>
        Checkout
      </button>
    </>
  );

  const cart = <Cart />;
  const checkOut = <CheckOut />;

  return (
    <>
      <Modal ref={cartModal} content={cart} actions={modalCartActions} />
      <Modal
        ref={checkOutModal}
        content={checkOut}
      />

      <header id="main-header">
        <div id="title">
          <img src={logoUrl} alt="FoodLogo" />
          <h1>REACTFOOD</h1>
        </div>
        <p>
          <button className="text-button" onClick={handleOpenCartClick}>
            Cart ({items.length})
          </button>
        </p>
      </header>
    </>
  );
}
