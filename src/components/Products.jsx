import "./Products.css";

export default function Products() {
  const products = [
    { id: 1, name: "Product 1", price: 30 },
    { id: 2, name: "Product 2", price: 40 },
    { id: 3, name: "Product 3", price: 45 },
    { id: 4, name: "Product 4", price: 95 },
    { id: 5, name: "Product 5", price: 70 },
    { id: 6, name: "Product 6", price: 25 },
  ];

  const handleAddToCart = (productName) => {
    console.log(`${productName} added to cart!`);
  };

  return (
    <div className="App-Products-Row">
      {products.map((product) => (
        <div className="App-Products-Box" key={product.id}>
          <h3>{product.name}</h3>
          <h4>${product.price.toFixed(2)}</h4>
          <button className="Add-To-Cart" onClick={() => handleAddToCart(product.name)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
