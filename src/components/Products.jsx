export default function Products({ products, isLoading }) {
  return (
    <section>
      {!isLoading && products.length > 0 && (
        <ul id="meals">
          {products.map((product) => (
            <li key={product.id} className="meal-item">
              <img
                src={`http://localhost:3000/${product.image}`}
                alt="productImage"
              />
              <h3>{product.name}</h3>
              <p className="meal-item-price">${product.price}</p>
              <p className="meal-item-description">{product.description}</p>
              <p className="meal-item-actions">
                <button className="button">Add to Cart</button>
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
