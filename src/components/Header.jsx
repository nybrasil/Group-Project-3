// Here we are importing a CSS file as a dependency
import "../styles/Header.css";
import project2Logo from "../assets/stock.jpeg.webp";

function Header() {
  return (

    <header className="subnav-hero-section">
    <img id="logo" src={ project2Logo }></img>
    <ul className="subnav-hero-subnav">
      <li><a href="#stockrates" className="is-active">Stock Rates</a></li>
      <li><a href="#chatBot">Stock Chatbot AI</a></li>
      <li><a href="#aboutUs1">About Us</a></li>
      <li><a href="#signin">Sign In</a></li>
    </ul>
  </header>
  );
}

export default Header;
