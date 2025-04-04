// import "./Products.css";

// export default function Products() {
//   const products = [
//     { id: 1, name: "Product 1", price: 30 },
//     { id: 2, name: "Product 2", price: 40 },
//     { id: 3, name: "Product 3", price: 45 },
//     { id: 4, name: "Product 4", price: 95 },
//     { id: 5, name: "Product 5", price: 70 },
//     { id: 6, name: "Product 6", price: 25 },
//   ];

//   const handleAddToCart = (productName) => {
//     console.log(`${productName} added to cart!`);
//   };

//   return (
//     <div className="App-Products-Row">
//       {products.map((product) => (
//         <div className="App-Products-Box" key={product.id}>
//           <h3>{product.name}</h3>
//           <h4>${product.price.toFixed(2)}</h4>
//           <button className="Add-To-Cart" onClick={() => handleAddToCart(product.name)}>
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// src/components/Products.js
// import React from "react";
// import "./Products.css";
// import { useCart } from "../context/CartContext";

// export default function Products() {
//   const { addToCart } = useCart();
//   const products = [
//     { id: 1, name: "Product 1", price: 30 },
//     { id: 2, name: "Product 2", price: 40 },
//     { id: 3, name: "Product 3", price: 45 },
//     { id: 4, name: "Product 4", price: 95 },
//     { id: 5, name: "Product 5", price: 70 },
//     { id: 6, name: "Product 6", price: 25 },
//   ];

//   return (
//     <div className="App-Products-Row">
//       {products.map((product) => (
//         <div className="App-Products-Box" key={product.id}>
//           <h3>{product.name}</h3>
//           <h4>${product.price.toFixed(2)}</h4>
//           <button className="Add-To-Cart" onClick={() => addToCart(product)}>
//             Add to Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// src/components/Products.jsx
import React from "react";
import "./Products.css";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart, notification, incrementQty, decrementQty, cartItems } = useCart(); // ✅ include notification
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const products = [
    { id: 1, name: "Product 1", price: 30 },
    { id: 2, name: "Product 2", price: 40 },
    { id: 3, name: "Product 3", price: 45 },
    { id: 4, name: "Product 4", price: 95 },
    { id: 5, name: "Product 5", price: 70 },
    { id: 6, name: "Product 6", price: 25 },
    { id: 7, name: "Product 7", price: 35 },
  ];

  return (
    <div>
      {/* Welcome Banner */}
      {loggedInUser && (
        <div
          style={{
            textAlign: "center",
            background: "#d4edda",
            color: "#155724",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #c3e6cb",
            borderRadius: "8px",
          }}
        >
          Welcome, {loggedInUser.username}!
        </div>
      )}

      {/* Notification */}
      {notification && (
        <div
          style={{
            textAlign: "center",
            background: "#cce5ff",
            color: "#004085",
            padding: "8px",
            marginBottom: "20px",
            border: "1px solid #b8daff",
            borderRadius: "8px",
          }}
        >
          {notification}
        </div>
      )}

      {/* Products */}
      <div className="App-Products-Row">
        {/* {products.map((product) => (
          <div className="App-Products-Box" key={product.id}>
            <h3>{product.name}</h3>
            <h4>${product.price.toFixed(2)}</h4>
            <span>
              <button></button>
            </span>
            <button className="Add-To-Cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))} */}
        {products.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);

          return (
            <div className="App-Products-Box" key={product.id}>
              <h3>{product.name}</h3>
              <h4>${product.price.toFixed(2)}</h4>
              {cartItem ? (
                <div>
                  <button onClick={() => decrementQty(product.id)}>-</button>
                  <span style={{ margin: "0 10px" }}>{cartItem.quantity}</span>
                  <button onClick={() => incrementQty(product.id)}>+</button>
                </div>
              ) : (
                <button className="Add-To-Cart" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

