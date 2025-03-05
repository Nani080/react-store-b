import React from "react";

export default function Login() {
  return (
    <div>
      <h2>Login Form</h2>
      <p>User: <input type="text" placeholder="UserName"></input></p>
      <p>Password: <input type="password" placeholder="Password"></input></p>
      <button>Log In</button>
    </div>
  );
}