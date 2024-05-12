import logoUrl from "../assets/logo.jpg";

export default function Header({cartItemsCount}) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoUrl} alt="FoodLogo" />
        <h1>REACTFOOD</h1>
      </div>
      <p>
        <button className="text-button">Cart ({cartItemsCount})</button>
      </p>
    </header>
  );
}
