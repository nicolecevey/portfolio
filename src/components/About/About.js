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
				I'm a frontend developer based in Toronto who made the transition from law to software development in 2022. I love all things Design Systems and bridging the knowledge gap between developers and designers.
				</p>
			</div>
			</div>
		</article>
		</>
	);
}
