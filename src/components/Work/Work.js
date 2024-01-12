import "../Work/Work.scss";
import launchIcon from "../../assets/icons/launch_black_24dp.svg";
import workData from "../../data/workData.json";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Work() {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);


	return (
		<>
			<a id="work"></a>
			<section className="work" id="work" data-aos="fade-up">
				<h1 className="work__title">My Work</h1>
					<div className="work__container">
						<ul>
							{workData.map((work, index) => (
								<li
									key={index}
									className="work__item"
								>
									<a href={work.link} target="_blank" rel="noreferrer">
										<img
											src={`${process.env.PUBLIC_URL
												}/Images/work-image${index + 1}.png`}
											className="work__image"
											alt={work.company}
										></img>
									</a>
									<div className="work__description">
										<h2 className="work__project-title">
											{work.company}
										</h2>
										<p className="work__project-text">
											{work.role}
										</p>
										<p className="work__project-text">
											{work.period}
										</p>
										<p className="work__project-text">
											{work.description}
										</p>
										<ul className="work__tech-list">
											{work.stack.map((tech, index) => {
												return <li className="work__tech" key={index}>{tech}</li>;
											})}
										</ul>
										<div className="work__links">
											<a
												href={work.link}
												target="_blank"
												className="work__link"
												rel="noreferrer"
											>
												<img
													src={launchIcon}
													className="work__link-icon"
													alt="Project link icon"
												></img>
											</a>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
			</section>
		</>
	);
}
