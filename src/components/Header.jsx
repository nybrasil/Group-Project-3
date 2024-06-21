// Here we are importing a CSS file as a dependency
import "../styles/Header.css";
import Ticker from "./Ticker";
import project2Logo from "../assets/project2Logo.jpeg";

function Header() {
  return (

    <header className="subnav-hero-section">
    <img id="logo" src={ project2Logo }></img>
    <ul className="subnav-hero-subnav">
      <li><a href="#fxrates" className="is-active">Foreign Exchange Rates</a></li>
      <li><a target="_blank" href="#travelBlog">Travel Blog</a></li>
      <li><a target="_blank" href="#chatBot">Travel Chatbot AI</a></li>
      <li><a target="_blank" href="#aboutUs">About Us</a></li>
      <li><a target="_blank" href="#aboutUs">Sign In</a></li>
    </ul>
  </header>
  );
}

export default Header;
