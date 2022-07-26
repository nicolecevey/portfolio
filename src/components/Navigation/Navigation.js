import "./Navigation.scss";
import resume from "../../documents/nicole-cevey-resume.pdf";

export function Navigation({ menuOpen, setMenuOpen }) {
  return (
    <nav className={"nav " + (menuOpen && "active")}>
      <ul className="nav__list">
        <li>
          <a href="#about" className="nav__text">
            About
          </a>
        </li>
        <li>
          <a href="#work" className="nav__text">
            Work
          </a>
        </li>
        <li>
          <a href="#contact" className="nav__text">
            Contact
          </a>
        </li>
        <li>
          <a href={resume} className="nav__text" target="blank">
            Resume
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="hamburger--line1"></span>
        <span className="hamburger--line2"></span>
        <span className="hamburger--line3"></span>
      </div>
    </nav>
  );
}
