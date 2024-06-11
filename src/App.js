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
import Video from './components/Video';
import Blog from './components/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillPatchQuestionFill } from "react-icons/bs";



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
      <Video/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;