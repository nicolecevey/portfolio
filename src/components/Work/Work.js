import "../Work/Work.scss";
import docTurn from "../../assets/docturn-image.png";
import githubIcon from "../../assets/icons/GitHub-Mark.png"; 
import launchIcon from "../../assets/icons/launch_black_24dp.svg"
import rightChevron from "../../assets/icons/chevron-right.svg";
import leftChevron from "../../assets/icons/chevron-left.svg";

export default function Work() {
    return (
        <section className="work">
            <h1 className="work__title">Projects I've Built</h1>
            <article className="carousel">
                <img src={leftChevron} className="carousel__next-icon"></img>
                <div className="carousel__track-container">
                    <ul className="carousel__track">
                        <li className="carousel__slide">
                            <img src={docTurn} className="carousel__image"></img>
                            <div className="carousel__description">
                                <h2 className="carousel__project-title">DocTurn</h2>
                                <p className="carousel__project-text">A document management application that makes keeping track of documents easy.</p>
                                <p className="carousel__project-text">Intended for lawyers and other business professionals who turn many documents on a regular basis.</p>
                                <ul className="carousel__tech-list">
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Sass</li>
                                    <li>Firebase</li>
                                </ul>
                                <a href="https://github.com/nicolecevey/docturn" target="_blank" alt="Demo of DocTurn App">
                                    <img src={githubIcon} className="carousel__link-icon">
                                    </img>
                                </a>
                                <a href="https://docturn.vercel.app/" target="_blank">
                                    <img src={launchIcon} className="carousel__link-icon">
                                    </img>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <img src={rightChevron} className="carousel__next-icon"></img>
            </article>
        </section>
    )
}