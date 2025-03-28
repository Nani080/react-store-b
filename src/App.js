// import "./App.css";
// import Header from "./components/Header";
// import Products from "./components/Products";
// import Footer from "./components/Footer";
// import Cart from "./components/Cart";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// function App(props) {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route index element={<Products />} />
//         <Route path="login" element={<Login />} />
//         <Route path="home" element={<Products />} />
//         <Route path="cart" element={<Cart />} />
//         <Route path="register" element={<Register />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>

//   );
// }

// export default App;

// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
