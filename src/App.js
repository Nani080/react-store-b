import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
