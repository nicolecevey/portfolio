import "./Contact.scss"
import githubIcon from "../../assets/icons/GitHub-Mark.png";
import linkedinIcon from "../../assets/icons/linkedin-logo.png";
import emailIcon from "../../assets/icons/email-icon.png";

export function Contact() {
    return (
        <section className="contact">
            <h1 className="contact__title">Get In Touch</h1>
            <ul className="contact__list">
                <li className="contact__list-item">
                    <a href="https://github.com/nicolecevey" target="_blank">
                        <img src={githubIcon} className="contact__icons"></img>
                    </a>
                </li>
                <li className="contact__list-item">
                    <a href="https://www.linkedin.com/in/nicole-cevey/" target="_blank">
                        <img src={linkedinIcon} className="contact__icons"></img>
                    </a>
                </li>
                <li className="contact__list-item">
                    <a href="mailto:nicole.cevey@gmail.com" target="_blank">
                        <img src={emailIcon} className="contact__icons"></img>
                    </a>
                </li>
            </ul>
        </section>
    )
}