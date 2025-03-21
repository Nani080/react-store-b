import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="App-Header-Row">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h2>My React Store</h2>
      </div>
      <div>
        <Link to="/home">Home|</Link>
        <Link to="/login">Login|</Link>
        <Link to="/cart">Cart</Link>
      </div>
      {/* <nav>
        <ul className="Nav-Menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav> */}
    </header>
  );
}
