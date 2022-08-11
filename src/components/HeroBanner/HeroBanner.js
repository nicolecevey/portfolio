import "./HeroBanner.scss";

export function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero__text" data-aos="fade-up">
        <h1>Hi, my name is</h1>
        <span className="hero__name">Nicole Cevey.</span>
        <p className="hero__description">
          I'm a Full-Stack Web Developer with a passion for UX/UI design.
        </p>
      </div>
    </section>
  );
}
