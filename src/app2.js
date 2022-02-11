import Navbar from './pages/navbar';
import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';
import HeroSection from './pages/heroSection';
import Footer from './pages/Footer';
import StatsPage from './pages/stats';
import FeaturesPage from './pages/features';
import GamesPage from './pages/games';
import EnginesPage from './pages/engines';
import PricingsPage from './pages/pricing';

function App2() {
    return (
      <HashRouter>
        <Navbar />
        <HeroSection />
        <StatsPage />
        <EnginesPage />
        <PricingsPage />
        <Footer />
      </HashRouter>
    );
  }
  
  export default App2;