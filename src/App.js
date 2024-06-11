import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Features from './components/Features';
import Overview from './components/Overview';
import Screenshot from './components/Screenshot';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Team from './components/Team';
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){

  return(
    <div>
      <NavBar/>
      <Banner/>
      <Features/>
      <Overview/>
      <Screenshot/>
      <Pricing/>
      <Testimonials/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;