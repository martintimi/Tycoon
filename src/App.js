import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Features from './components/Features';
import Overview from './components/Overview';
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){

  return(
    <div>
      <NavBar/>
      <Banner/>
      <Features/>
      <Overview/>
    </div>
  );
}

export default App;