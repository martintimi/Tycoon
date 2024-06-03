import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Features from './components/Features';
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){

  return(
    <div>
      <NavBar/>
      <Banner/>
      <Features/>
    </div>
  );
}

export default App;