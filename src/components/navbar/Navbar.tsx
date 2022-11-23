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
          <li id="nav-socials">
            <a href="https://www.linkedin.com/in/drew18moore/" className="nav-social-link" target={"_blank"}>
              <img src="logos/linkedin-icon.png" alt="LinkedIn Logo" />
            </a>
            <a href="https://github.com/drew18moore" className="nav-social-link" target={"_blank"}>
              <img src="logos/github-icon.png" alt="GitHub Logo" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
