import resume from "../../documents/nicole-cevey-resume.pdf";
import "./MobileMenu.scss";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={"mobile-menu " + (menuOpen && "active")}>
      <ul className="mobile-menu__links">
        <li className="mobile-menu__list-item" onClick={() => toggleMenu()}>
          <a href="#about" className="mobile-menu__link">
            About
          </a>
        </li>
        <li className="mobile-menu__list-item" onClick={() => toggleMenu()}>
          <a href="#work" className="mobile-menu__link">
            Work
          </a>
        </li>
        <li className="mobile-menu__list-item" onClick={() => toggleMenu()}>
          <a href="#contact" className="mobile-menu__link">
            Contact
          </a>
        </li>
        <li className="mobile-menu__list-item" onClick={() => toggleMenu()}>
          <a href={resume} className="mobile-menu__link" target="blank">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
