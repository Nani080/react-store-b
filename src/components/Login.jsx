// import React from "react";
// import "./Login.css";
// import { Link } from "react-router-dom";
// export default function Login() {
//   return (
//     <div style={{ textAlign: "center", margin: "50px" }}>
//       <h2>Login</h2>
//       <form>
//         <div style={{ marginBottom: "10px" }}>
//           <input type="text" placeholder="Username" style={{ padding: "8px", width: "250px" }} />
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//           <input type="password" placeholder="Password" style={{ padding: "8px", width: "250px" }} />
//         </div>
//         <button style={{ padding: "10px 20px", background: "#28a745", color: "white", border: "none", cursor: "pointer" }}>
//           Log In
//         </button><br />
//         <Link to={"/register"} style={{ marginLeft: "10px" }}>
//           Register
//         </Link>
//       </form>
//     </div>
//   );
// }

// src/components/Login.jsx
import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setMsg("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setTimeout(() => navigate("/home"), 1000);
    } else {
      setMsg("Invalid credentials.");
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <h2>Login</h2>
      <div style={{ color: msg.includes("successful") ? "green" : "red" }}>{msg}</div>
      <form onSubmit={handleLogin}>
        <div><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></div><br />
        <div><input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /></div><br />
        <button type="submit">Login</button><br />
        <Link to="/register">Don't have an account? Register</Link>
      </form>
    </div>
  );
}
