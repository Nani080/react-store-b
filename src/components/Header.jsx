// import "./Header.css";
// import { Link } from "react-router-dom";
// export default function Header() {
//   return (
//     <header className="App-Header-Row">
//       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//         <h2>My React Store</h2>
//       </div>
//       <div>
//         <Link to="/home">Home|</Link>
//         <Link to="/cart">Cart|</Link>
//         <Link to="/login">Login|</Link>
//         <Link to="/register">Register</Link>
//       </div>
//       {/* <nav>
//         <ul className="Nav-Menu">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Products</a></li>
//           <li><a href="#">Contact</a></li>
//           <li><a href="#">Login</a></li>
//         </ul>
//       </nav> */}
//     </header>
//   );
// }

// import "./Header.css";
// import { Link, useNavigate } from "react-router-dom";

// export default function Header() {
//   const navigate = useNavigate();
//   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     navigate("/login");
//   };

//   return (
//     <header className="App-Header-Row">
//       <h2>My React Store</h2>
//       <div>
//         {loggedInUser ? (
//           <>
//             <Link to="/home">Home | </Link>
//             <Link to="/cart">Cart | </Link>
//             <button onClick={handleLogout} style={{ background: "transparent", border: "none", color: "white", cursor: "pointer" }}>
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">Login | </Link>
//             <Link to="/register">Register</Link>
//           </>
//         )}
//       </div>
//     </header>
//   );
// }

import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  const handleClearData = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all user data?");
    if (confirmClear) {
      localStorage.clear();
      alert("All user data cleared!");
      navigate("/register");
    }
  };

  return (
    <header className="App-Header-Row">
      <h2>My React Store</h2>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {loggedInUser ? (
          <>
            <Link to="/home">Home</Link> |
            <Link to="/cart">Cart</Link> |
            <button onClick={handleLogout} style={{ background: "transparent", border: "none", color: "red", cursor: "pointer" }}>
              Logout
            </button>
            <button onClick={handleClearData} style={{ background: "transparent", border: "none", color: "red", cursor: "pointer" }}>
              Clear Data
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> |
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  );
}
