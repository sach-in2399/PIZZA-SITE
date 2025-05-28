import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">🍳 RecipeBook</Link>
    </div>
  </nav>
);

export default Navbar;
