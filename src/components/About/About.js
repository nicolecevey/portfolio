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
              I'm a web developer based in Toronto. I recently made the
              transition from law to web development after working in a
              corporate law firm as a legal assistant. I'm passionate about
              developing beautiful apps.
            </p>
          </div>
          <section className="about__knowledge">
            <div className="technologies">
              <h2 className="technologies__title">Some Technologies I use</h2>
              <ul className="technologies__list">
                <div>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Sass</li>
                  <li>Node.js</li>
                  <li>Express</li>
                </div>
                <div>
                  <li>SQL</li>
                  <li>mySQL</li>
                  <li>Firebase</li>
                  <li>MongoDB</li>
                  <li>Figma</li>
                </div>
              </ul>
            </div>
            <div className="learning">
              <h2 className="learning__title">What I'm learning</h2>
              <ul className="learning__list">
                <li>Web3.js</li>
                <li>Solidity</li>
                <li>AWS</li>
              </ul>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
