import { useRef } from "react";
import logoUrl from "../assets/logo.jpg";
import Modal from "./Modal";
import Cart from "./Cart";

export default function Header({ cartItemsCount }) {
  const cartModal = useRef();
  function handleOpenCartClick() {
    cartModal.current.open();
  }

  const modalCartActions = (
    <>
      <button className="text-button">Close</button>
      <button className="button">Checkout</button>
    </>
  );

  const cart = <Cart />;

  return (
    <>
      <Modal ref={cartModal} content={cart} actions={modalCartActions} />
      <header id="main-header">
        <div id="title">
          <img src={logoUrl} alt="FoodLogo" />
          <h1>REACTFOOD</h1>
        </div>
        <p>
          <button className="text-button" onClick={handleOpenCartClick}>
            Cart ({cartItemsCount})
          </button>
        </p>
      </header>
    </>
  );
}
