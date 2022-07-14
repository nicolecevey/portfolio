import './App.scss';
import "./components/HeroBanner/HeroBanner";
import { HeroBanner } from './components/HeroBanner/HeroBanner';
import { Navigation } from './components/Navigation/Navigation';
import { About } from './components/About/About';

function App() {
  return (
    <>
      <Navigation/>
      <div className="main">
        <HeroBanner/>
        <About/>
      </div>
    </>
  );
}

export default App;
