import headshot from "../../assets/headshot.png";
import downChevron from "../../assets/icons/down-chevron.png";
import "./About.scss";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

export function About() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const handleClick = () => {
    window.scroll(0, 700);
  };

  return (
    <>
      <a id="about" className="anchor"></a>
      <img
        src={downChevron}
        className="arrow-down"
        onClick={() => handleClick()}
      ></img>
      <article className="about" data-aos="fade-up">
        <img src={headshot} className="about__headshot" alt="Headshot"></img>
        <div className="about__description">
          <h1 className="about__title">About Me</h1>
          <div className="about__text">
            <p>
              I'm a former legal assistant who worked at one of Canada's largest
              corporate law firms before making the transition to web
              development.
            </p>
          </div>
          <section className="technologies">
            <h2 className="technologies__title">Some Technologies I use</h2>
            <ul className="technologies__list">
              <div>
                <li>JavaScript</li>
                <li>React</li>
                <li>Sass</li>
                <li>Node.js</li>
              </div>
              <div>
                <li>Express</li>
                <li>Firebase</li>
                <li>MongoDB</li>
              </div>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
