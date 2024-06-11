import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Screen1 from '../assets/images/screen1.jpeg';
import Screen2 from '../assets/images/screen2.jpeg';
import Screen3 from '../assets/images/screen3.jpeg';
import Screen4 from '../assets/images/screen4.jpeg';
import Screen5 from '../assets/images/screen5.jpeg';




function Screenshot() {
  return (
    <section className="screenshot">
      <Container>
      <div>
        <span className="text-primary d-block">SCREENSHOTS</span>
        <h1 className="header-with-line2 pt-3">App Screenshots</h1>
        <p className='py-5'>
          There are many variations of passages of Lorem Ipsum available, but <br />
          the majority have suffered alteration in some form.
        </p>
      </div>
      <Carousel indicators={true} controls={false} className="custom-carousel mb-5">
        <Carousel.Item >
          <div className="d-flex">
          <img
            className="img_size mx-3"
            src={Screen1}
            alt="Dota 2"
          />
            <img
            className="img_size mx-3"
            src={Screen2}
            alt="Dota 2"
          />
            <img
            className="img_size mx-3"
            src={Screen3}
            alt="Dota 2"
          />
            <img
            className="img_size mx-3"
            src={Screen4}
            alt="Dota 2"
          />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="d-flex">
          <img
            className="img_size mx-3"
            src={Screen5}
            alt="Dota 2"
          />
            <img
            className="img_size mx-3"
            src={Screen2}
            alt="Dota 2"
          />
            <img
            className="img_size mx-3"
            src={Screen3}
            alt="Dota 2"
          />
            <img
            className="img_size mx-3"
            src={Screen2}
            alt="Dota 2"
          />
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="d-flex">
          <img
            className="img_size mx-3"
            src={Screen3}
            alt="Dota 2"
          />
            <img
            className="img_size mx-3"
            src={Screen4}
            alt="Dota 2"
          />
            <img
            className="img_size mx-3"
            src={Screen5}
            alt="Dota 2"
          />
            <img
            className="img_size mx-3"
            src={Screen4}
            alt="Dota 2"
          />
          </div>
        </Carousel.Item>
      </Carousel>
      </Container>
    </section>
  );
}

export default Screenshot;
