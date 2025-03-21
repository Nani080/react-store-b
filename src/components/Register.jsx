import React from 'react'
import "./Register.css";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <h2>Registration Form</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
        <input type="text" placeholder="Username" style={{ padding: "8px", width: "250px" }} /><br />
        </div>
        <div style={{ marginBottom: "10px" }}>
        <input type="email" placeholder="Email" style={{ padding: "8px", width: "250px" }} /><br />
        </div>
        <div style={{ marginBottom: "10px" }}>
        <input type="password" placeholder="Password" style={{ padding: "8px", width: "250px" }} /><br />
        </div>
        <div style={{ marginBottom: "10px" }}>
        <input type="password" placeholder="Confirm Password" style={{ padding: "8px", width: "250px" }} /><br />
        </div>
        <button type="submit">Register</button>
        <Link to="/login" style={{ marginLeft: "10px" }}>Login</Link>
      </form>
    </div>
  )
}
