import "./Header.css";
export default function Header() {
  return (
    <header className="App-Header-Row">
      <h1>My React Store</h1>
      <nav>
        <ul className="Nav-Menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}