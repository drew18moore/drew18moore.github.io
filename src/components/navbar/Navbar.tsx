import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <div id="nav-logo">
          <Link to="/">Drew Moore</Link>
        </div>
        <ul id="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
