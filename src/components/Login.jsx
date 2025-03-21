import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <h2>Login</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <input type="text" placeholder="Username" style={{ padding: "8px", width: "250px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input type="password" placeholder="Password" style={{ padding: "8px", width: "250px" }} />
        </div>
        <button style={{ padding: "10px 20px", background: "#28a745", color: "white", border: "none", cursor: "pointer" }}>
          Log In
        </button><br />
        <Link to={"/register"} style={{ marginLeft: "10px" }}>
          Register
        </Link>
      </form>
    </div>
  );
}