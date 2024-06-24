// Here we are importing a CSS file as a dependency
import "../styles/Header.css";
import project2Logo from "../assets/stock.jpeg.webp";
import { Link } from "react-router-dom";


function Header() {
  return (

    <header className="subnav-hero-section">
    <img id="logo" src={ project2Logo }></img>
    <ul className="subnav-hero-subnav">
    <li><Link to="/landing">Home</Link></li>
      <li><Link to="/aboutus">About Us</Link></li>
      <li><Link to="/">SignIn</Link></li>
    </ul>
  </header>
  );
}

export default Header;
