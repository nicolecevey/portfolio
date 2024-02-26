import "../Designs/Designs.scss";
import launchIcon from "../../assets/icons/launch_black_24dp.svg";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Designs() {
	const [slideIndex, setSlideIndex] = useState(1);

	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);


	return (
		<>
			<a id="designs"></a>
			<section className="designs" id="designs" data-aos="fade-up">
				<div className="designs__container">
					<h1 className="designs__title">Designs</h1>
					<div className="designs__carousel">
						<div className="designs__images">
							<img src={`${process.env.PUBLIC_URL}/Images/dazzledash1.png`}
								className="designs__image"
								alt="Design screenshot"
							></img>
							<img src={`${process.env.PUBLIC_URL}/Images/dazzledash2.png`}
								className="designs__image"
								alt="Design screenshot"
							></img>
						</div>
						<div className="work__description">
							<img src={`${process.env.PUBLIC_URL}/Images/dazzledash-logo.png`}
								className="designs__logo"
								alt="DazzleDash logo"
							></img>
							<p className="work__project-text">A cleaning app that connects local cleaners to users. Designed for my final
project for my UX Design course.</p>
							<div className="designs__links">
								<span>Figma prototype</span>
								<a
									href="https://www.figma.com/proto/LL4l7W7YdlZDPqzl0d2MoX/Final-Project-N.-Cevey?type=design&node-id=31-1815&t=oTzXiOVk2ASswKTR-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=110%3A1276&mode=design"
									target="_blank"
									className="designs__link"
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
					</div>
				</div>
			</section>
		</>
	);
}
