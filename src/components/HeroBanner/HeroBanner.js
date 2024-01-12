import "./HeroBanner.scss";

export function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero__text" data-aos="fade-up">
        <h1>Hi, my name is</h1>
        <span className="hero__name">Nicole Cevey.</span>
        <p className="hero__description">
          I'm a Frontend Developer with a passion for UX design.
        </p>
      </div>
    </section>
  );
}
