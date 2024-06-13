import React, { useState, useEffect } from 'react';
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
import Newsletter from './components/Newsletter';
import Loading from './components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillPatchQuestionFill } from "react-icons/bs";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async action, like fetching data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed or replace with actual data fetching
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <Banner />
          <Features />
          <Overview />
          <Screenshot />
          <Pricing />
          <Testimonials />
          <Team />
          <Video />
          <Blog />
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
