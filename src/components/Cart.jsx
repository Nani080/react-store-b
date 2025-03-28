// import React from 'react'

// export default function Cart() {
//   return (
//     <div>Cart</div>
//   )
// }

// src/components/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, clearCart } = useCart();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
