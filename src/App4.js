import React from "react";
import "./App4.css"; // Import the external CSS file

export default function App4() {
    const [user, setUser] = React.useState({});
    const [msg, setMsg] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.email === "john@gmail.com" && user.password === "123456") {
            setMsg("Welcome John!");
        } else {
            setMsg("Access Denied");
        }
    };

    return (
        <div className="login-container">
            <h2>Login Form</h2>
            <p className="login-message">{msg}</p>

            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <input
                        type="email"
                        placeholder="Email"
                        className="login-input"
                        onChange={(event) => setUser({ ...user, email: event.target.value })}
                    />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        onChange={(event) => setUser({ ...user, password: event.target.value })}
                    />
                </div>

                <button type="submit" className="login-button">
                    Log In
                </button>
            </form>
        </div>
    );
}
