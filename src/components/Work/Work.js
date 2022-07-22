import "../Work/Work.scss";
import docTurn from "../../assets/docturn-image.png";
import githubIcon from "../../assets/icons/GitHub-Mark.png"; 
import launchIcon from "../../assets/icons/launch_black_24dp.svg"
import rightChevron from "../../assets/icons/chevron-right.svg";

export default function Work() {
    return (
        <section className="work">
            <h1 className="work__title">Projects I've Built</h1>
            <article>
                <div className="work__project-card">
                    <img src={docTurn} className="work__image"></img>
                    <div className="work__description">
                        <h2 className="work__project-title">DocTurn</h2>
                        <p className="work__project-text">A document management application that makes keeping track of documents easy.</p>
                        <p className="work__project-text">Intended for lawyers and other business professionals who turn many documents on a regular basis.</p>
                        <ul className="work__tech-list">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Sass</li>
                            <li>Firebase</li>
                        </ul>
                        <a href="https://github.com/nicolecevey/docturn" target="_blank">
                            <img src={githubIcon} className="work__link-icon">
                            </img>
                        </a>
                        <a href="https://docturn.vercel.app/" target="_blank">
                            <img src={launchIcon} className="work__link-icon">
                            </img>
                        </a>
                    </div>
                    <img src={rightChevron} className="work__next-button"></img>
                </div>
            </article>
        </section>
    )
}