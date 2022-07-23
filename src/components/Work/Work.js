import "../Work/Work.scss";
import githubIcon from "../../assets/icons/GitHub-Mark.png";
import launchIcon from "../../assets/icons/launch_black_24dp.svg";
import rightChevron from "../../assets/icons/chevron-right.svg";
import leftChevron from "../../assets/icons/chevron-left.svg";
import workData from "../../data/workData.json";
import React, { useState } from "react";

export default function Work() {

    // [currentSlide, setCurrentSlide] = 
    
    // const slides = Array.from(track.children);
    
  return (
    <section className="work">
      <h1 className="work__title">Projects I've Built</h1>
      <article className="carousel">
        <div className="carousel__container">
          <img src={leftChevron} className="carousel__next-icon"></img>
          <div className="carousel__track-container">
            <ul className="carousel__track">
                {workData.map((project, index) => {
                    console.log(project.stack)
                    return(
                        <li className="carousel__slide">
                            <img src={`http://localhost:3000/Images/project-image${index + 1}.png`} className="carousel__image"></img>
                            <div className="carousel__description">
                            <h2 className="carousel__project-title">{project.name}</h2>
                            <p className="carousel__project-text">{project.description}</p>
                            <ul className="carousel__tech-list">
                                {(project.stack).map((tech) => {
                                    return (<li>{tech}</li>)
                                    })
                                }
                            </ul>
                            <a
                                href={project.github}
                                target="_blank"
                                alt="Demo of DocTurn App"
                            >
                                <img src={githubIcon} className="carousel__link-icon"></img>
                            </a>
                            <a href={project.link} target="_blank">
                                <img src={launchIcon} className="carousel__link-icon"></img>
                            </a>
                            </div>
                        </li>
                    )
                })}
            </ul>
          </div>
          <img src={rightChevron} className="carousel__next-icon"></img>
        </div>
        <div className="carousel__indicators">
          <button className="carousel__indicator carousel__indicator--current-slide"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
        </div>
      </article>
    </section>
  );
}
