import headshot from "../../assets/headshot.png";
import "./About.scss";

export function About() {
 return (
    <article className="about">
        <img src={headshot} className="about__headshot"></img>
        <div className="about__text">
            <h1>About Me</h1>
        </div>
    </article>

 )
}