import "../Work/Work.scss";
import githubIcon from "../../assets/icons/GitHub-Mark.png";
import launchIcon from "../../assets/icons/launch_black_24dp.svg";
import rightChevron from "../../assets/icons/chevron-right.svg";
import leftChevron from "../../assets/icons/chevron-left.svg";
import workData from "../../data/workData.json";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Work() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const nextSlide = () => {
    if (slideIndex !== workData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === workData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(workData.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <a id="work"></a>
      <section className="work" id="work" data-aos="fade-up">
        <h1 className="work__title">Projects I've Built</h1>
        <article className="carousel">
          <div className="carousel__container">
            <img
              src={leftChevron}
              className="carousel__next-icon"
              onClick={prevSlide}
              alt="Left chevron to go to previous slide"
            ></img>
            <div className="carousel__track-container">
              <ul className="carousel__track">
                {workData.map((project, index) => {
                  if (slideIndex === index + 1) {
                    return (
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className={
                          slideIndex === index + 1
                            ? "carousel__slide active-anim"
                            : "carousel__slide"
                        }
                        key={project.id}
                      >
                        <img
                          src={`https://nicole-cevey-portfolio.herokuapp.com/Images/project-image${
                            index + 1
                          }.png`}
                          className="carousel__image"
                          alt="Project screenshot"
                        ></img>
                        <div className="carousel__description">
                          <h2 className="carousel__project-title">
                            {project.name}
                          </h2>
                          <p className="carousel__project-text">
                            {project.description}
                          </p>
                          <ul className="carousel__tech-list">
                            {project.stack.map((tech) => {
                              return <li className="carousel__tech">{tech}</li>;
                            })}
                          </ul>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            alt="Demo of DocTurn App"
                          >
                            <img
                              src={githubIcon}
                              className="carousel__link-icon"
                              alt="GitHub icon link"
                            ></img>
                          </a>
                          <a
                            href={project.link}
                            target="_blank"
                            className="carousel__link"
                            rel="noreferrer"
                          >
                            <img
                              src={launchIcon}
                              className="carousel__link-icon"
                              alt="Project link icon"
                            ></img>
                          </a>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <img
              src={rightChevron}
              className="carousel__next-icon"
              onClick={nextSlide}
              alt="Right chevron to go to next slide"
            ></img>
          </div>
          <div className="carousel__indicators">
            {Array.from({ length: 2 }).map((item, index) => (
              <div
                onClick={() => moveDot(index + 1)}
                className={
                  slideIndex === index + 1
                    ? "carousel__indicator--active"
                    : "carousel__indicator"
                }
              ></div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
