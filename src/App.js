import "./App.scss";
import "./components/HeroBanner/HeroBanner";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { Navigation } from "./components/Navigation/Navigation";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Designs from "./components/Designs/Designs";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      <HeroBanner />
      <About />
      <Work />
      <Projects />
      <Designs />
      <Contact />
    </>
  );
}

export default App;
