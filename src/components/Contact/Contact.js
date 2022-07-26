import "./Contact.scss";
import githubIcon from "../../assets/icons/GitHub-Mark.png";
import linkedinIcon from "../../assets/icons/linkedin-logo.png";
import emailIcon from "../../assets/icons/email-icon.png";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="contact" id="contact">
      <h1 className="contact__title">Get In Touch</h1>
      <ul className="contact__list">
        <li className="contact__list-item">
          <a
            href="https://github.com/nicolecevey"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubIcon}
              className="contact__icons"
              alt="GitHub Icon"
            ></img>
          </a>
        </li>
        <li className="contact__list-item">
          <a
            href="https://www.linkedin.com/in/nicole-cevey/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              className="contact__icons"
              alt="LinkedIn icon"
            ></img>
          </a>
        </li>
        <li className="contact__list-item">
          <a
            href="mailto:nicole.cevey@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={emailIcon}
              className="contact__icons"
              alt="Email icon"
            ></img>
          </a>
        </li>
      </ul>
    </section>
  );
}
