import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar'
import HeroTop from './components/HeroTop';
import Hero from './components/Hero';
import Card from './components/Card';
import Customers from './components/Customers';
import OwlCarousel from './components/Carousel';
import Sneak from './components/Sneak';
import SneakCard from './components/SneakCard';
import Trusted from './components/Trusted';
import Footer from './components/Footer';
function App() {

  return (
    <>
    <TopBar/>
    <NavBar/>
    <HeroTop/>
    <Hero/>
    <Card/>
    <Customers/>
    <OwlCarousel/>
    <Sneak/>
    <SneakCard/>
    <Trusted/>
    <Footer/>
    </>
  );
}

export default App;
