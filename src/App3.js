import React from "react";
export default function App3() {
    const [email, setEmail] = React.useState();

    const [password, setPassword] = React.useState();

    const [msg, setMsg] = React.useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === "john@gmail.com" && password === "123456") {
            setMsg("Welcome John!")
        }else{
            setMsg("Access Denied")
        }
    };

  return (

    <div style={{ textAlign: "center", margin: "50px" }}>

      <h2>Login Form</h2>

        <p>{msg}</p>

      <form onSubmit={handleSubmit}>

        <div style={{ marginBottom: "10px" }}>
          <input type="email" placeholder="Email" style={{ padding: "8px", width: "250px" }} onChange={(event) => setEmail(event.target.value)} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input type="password" placeholder="Password" style={{ padding: "8px", width: "250px" }} onChange={(event) => setPassword(event.target.value)} />
        </div>

        <button type="submit" style={{ padding: "10px 20px", background: "#28a745", color: "white", border: "none", cursor: "pointer", borderRadius: "10px" }}>
          Log In
        </button>

      </form>

    </div>

  );

}