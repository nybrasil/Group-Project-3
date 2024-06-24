import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about-us">About Us</Link>
    </nav>
  );
}

export default Navigation;