// import React from 'react'

// export default function Cart() {
//   return (
//     <div>Cart</div>
//   )
// }

// src/components/Cart.js
// import React from "react";
// import { useCart } from "../context/CartContext";

// export default function Cart() {
//   const { cartItems, clearCart } = useCart();

//   return (
//     <div style={{ textAlign: "center", padding: "40px" }}>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Cart is empty.</p>
//       ) : (
//         <>
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             {cartItems.map((item, index) => (
//               <li key={index}>
//                 {item.name} - ${item.price} - ${item.quantity}
//               </li>
//             ))}
//           </ul>
//           <button onClick={clearCart}>Clear Cart</button>
//         </>
//       )}
//     </div>
//   );
// }

// import React from "react";
// import { useCart } from "../context/CartContext";

// export default function Cart() {
//   const { cartItems, incrementQty, decrementQty, clearCart } = useCart();

//   return (
//     <div style={{ textAlign: "center", padding: "40px" }}>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Cart is empty.</p>
//       ) : (
//         <>
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             {cartItems.map((item) => (
//               <li key={item.id} style={{ marginBottom: "10px" }}>
//                 <strong>{item.name}</strong> - ${item.price} × {item.quantity} ={" "}
//                 <strong>${item.price * item.quantity}</strong>
//                 <div style={{ marginTop: "5px" }}>
//                   <button onClick={() => decrementQty(item.id)}>-</button>
//                   <button onClick={() => incrementQty(item.id)}>+</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <button onClick={clearCart}>Clear Cart</button>
//         </>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";

// export default function Cart() {
//   const { cartItems, incrementQty, decrementQty, clearCart } = useCart();
//   const { notification } = useCart();
//   const [showModal, setShowModal] = useState(false);
//   const [orders, setOrders] = useState([]);

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div style={{ textAlign: "center", padding: "40px" }}>
//       <h2>Your Cart</h2>
//       {notification && (
//         <div style={{ background: "#4caf50", color: "white", padding: "10px", borderRadius: "5px", margin: "10px 0" }}>
//           {notification}
//         </div>
//       )}
//       {cartItems.length === 0 ? (
//         <p>Cart is empty.</p>
//       ) : (
//         <>
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             {cartItems.map((item) => (
//               <li key={item.id} style={{ marginBottom: "10px" }}>
//                 <strong>{item.name}</strong> - ${item.price} × {item.quantity} ={" "}
//                 <strong>${item.price * item.quantity}</strong>
//                 <div style={{ marginTop: "5px" }}>
//                   <button onClick={() => decrementQty(item.id)}>-</button>
//                   <button onClick={() => incrementQty(item.id)}>+</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <h3>Total: ${total.toFixed(2)}</h3>
//           <button onClick={clearCart}>Clear Cart</button>
//           <button onClick={() => setShowModal(true)}>Checkout</button>
//           {showModal && (
//             <div style={{
//               position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
//               background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center"
//             }}>
//               <div style={{ background: "white", padding: 20, borderRadius: 8, textAlign: "center" }}>
//                 <h3>Confirm Checkout</h3>
//                 <p>Total: ${total.toFixed(2)}</p>
//                 <button onClick={() => { clearCart(); setShowModal(false); }}>Confirm</button>
//                 <button onClick={() => setShowModal(false)} style={{ marginLeft: 10 }}>Cancel</button>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, incrementQty, decrementQty, clearCart } = useCart();
  const { notification } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState([]);

  // Retrieve the current user's email from localStorage
  const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const email = currentUser?.email || "No email available";

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Load orders from localStorage when the component mounts
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handleConfirmCheckout = () => {
    const orderDate = new Date().toLocaleString();
    const orderItems = cartItems.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const newOrder = {
      orderDate,
      email,
      items: orderItems,
      total: total.toFixed(2),
      status: "pending",
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
    clearCart();
    setShowModal(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Your Cart</h2>
      {notification && (
        <div
          style={{
            background: "#4caf50",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            margin: "10px 0",
          }}
        >
          {notification}
        </div>
      )}
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item) => (
              <li key={item.id} style={{ marginBottom: "10px" }}>
                <strong>{item.name}</strong> - ${item.price} × {item.quantity} ={" "}
                <strong>${item.price * item.quantity}</strong>
                <div style={{ marginTop: "5px" }}>
                  <button onClick={() => decrementQty(item.id)}>-</button>
                  <button onClick={() => incrementQty(item.id)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={() => setShowModal(true)}>Checkout</button>
          {showModal && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0,0,0,0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "white",
                  padding: 20,
                  borderRadius: 8,
                  textAlign: "center",
                }}
              >
                <h3>Confirm Checkout</h3>
                <p>Total: ${total.toFixed(2)}</p>
                <button onClick={handleConfirmCheckout}>Confirm</button>
                <button
                  onClick={() => setShowModal(false)}
                  style={{ marginLeft: 10 }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}
      <div style={{ marginTop: "40px" }}>
        <h3>Orders</h3>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {orders.map((order, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <strong>Order Date:</strong> {order.orderDate} <br />
                <strong>Email:</strong> {order.email} <br />
                <strong>Items:</strong>
                <ul>
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      {item.name} - ${item.price} × {item.quantity}
                    </li>
                  ))}
                </ul>
                <strong>Total:</strong> ${order.total} <br />
                <strong>Status:</strong> {order.status}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}