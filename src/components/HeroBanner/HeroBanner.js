import "./HeroBanner.scss";

export function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>Hi, my name is</h1>
        <span className="hero__name">Nicole Cevey.</span>
        <p className="hero__description">
          I'm a Full-Stack Web Developer with a passion for UX design.
        </p>
      </div>
    </section>
  );
}
