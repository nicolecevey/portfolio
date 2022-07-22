import './App.scss';
import "./components/HeroBanner/HeroBanner";
import { HeroBanner } from './components/HeroBanner/HeroBanner';
import { Navigation } from './components/Navigation/Navigation';
import { About } from './components/About/About';
import { Contact } from "./components/Contact/Contact";
import Work from './components/Work/Work';

function App() {
  return (
    <>
      <Navigation/>
      <HeroBanner/>
      <About/>
      <Work/>
      <Contact/>
    </>
  );
}

export default App;
