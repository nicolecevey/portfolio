 import "./Navigation.scss";
 import resume from "../../documents/nicole-cevey-resume.pdf";
 
 export function Navigation() {
    return (
        <nav className="nav">
            <a href="#about" className="nav__text">About</a>
            <a href="#work" className="nav__text">Work</a>
            <a href="#contact" className="nav__text">Contact</a>
            <a 
                href={resume} 
                className="nav__text"
                target="blank"
            >Resume</a>
        </nav>
    )
 }