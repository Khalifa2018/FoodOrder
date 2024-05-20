import { useContext } from "react";
import AvailableProducts from "./components/AvailableProducts";
import Header from "./components/Header";
import CartContextProvider, { CartContext } from "./store/meal-cart-context";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header/>
        <AvailableProducts />
      </CartContextProvider>
    </>
  );
}

export default App;
