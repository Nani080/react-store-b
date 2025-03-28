// import React from 'react'
// import "./Register.css";
// import { Link } from "react-router-dom";
// export default function Register() {
//   const [users, setUsers] = React.useState([]);
//   const [username, setUsername] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [confirmPassword, setConfirmPassword] = React.useState("");
//   const [msg, setMsg] = React.useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!username || !email || !password || !confirmPassword) {
//       return;
//     }
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     if (users.find((user) => user.email === email) ) {
//       setMsg("User already exists");
//     }
//     const newUser = { id:Date.now(), username, email, password, confirmPassword };
//     setUsers([...users, newUser]);
//     setUsername("");
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//   }
//   const handleRemove = (id) => {
//     setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
//   }
//   return (
//     <div style={{ textAlign: "center", margin: "50px" }}>
//       <h2>Registration Form</h2>
//       <div style={{ color: "red" }}>{msg}</div>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "10px" }}>
//         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ padding: "8px", width: "250px" }} /><br />
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: "8px", width: "250px" }} /><br />
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: "8px", width: "250px" }} /><br />
//         </div>
//         <div style={{ marginBottom: "10px" }}>
//         <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ padding: "8px", width: "250px" }} /><br />
//         </div>
//         <button style={{ padding: "10px 20px", background: "#28a745", color: "white", border: "none", cursor: "pointer" }}>
//           Register
//         </button><br />
//         <Link to="/login" style={{ marginLeft: "10px" }}>Login</Link>
//         <div>
//           <h3>Registered Users</h3>
//           <table style={{ margin: "auto", width: "50%", borderCollapse: "collapse", border: "1px solid #333" }}>
//             <thead>
//               <tr>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Password</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>
//                   <td>{user.password}</td>
//                   <td><button onClick={() => handleRemove(user.id)}>X</button></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </form>
//     </div>
//   )
// }

import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setMsg("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      setMsg("Passwords do not match!");
      return;
    }
    if (users.find((user) => user.email === email)) {
      setMsg("User already exists!");
      return;
    }

    const newUser = { id: Date.now(), username, email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setMsg("Registration successful!");

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <h2>Registration Form</h2>
      <div style={{ color: msg.includes("successful") ? "green" : "red" }}>{msg}</div>
      <form onSubmit={handleSubmit}>
        <div><input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /></div><br />
        <div><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></div><br />
        <div><input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /></div><br />
        <div><input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></div><br />
        <button type="submit">Register</button><br />
        <Link to="/login">Already have an account? Login</Link>
      </form>
    </div>
  );
}
