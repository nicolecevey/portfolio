import resume from "../../documents/nicole-cevey-resume.pdf";
import "./MobileMenu.scss";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <nav className={"mobile-menu " + (menuOpen && "active")}>
      <ul className="mobile-menu__links">
        <li
          className="mobile-menu__list-item"
          onClick={() => toggleMenu()}
          data-aos="fade-up"
        >
          <a href="#about" className="mobile-menu__link">
            About
          </a>
        </li>
        <li
          className="mobile-menu__list-item"
          onClick={() => toggleMenu()}
          data-aos="fade-up"
        >
          <a href="#work" className="mobile-menu__link">
            Work
          </a>
        </li>
        <li
          className="mobile-menu__list-item"
          onClick={() => toggleMenu()}
          data-aos="fade-up"
        >
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
