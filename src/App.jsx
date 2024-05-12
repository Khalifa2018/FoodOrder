import AvailableProducts from "./components/AvailableProducts";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header cartItemsCount={3} />
      <AvailableProducts />
    </>
  );
}

export default App;
