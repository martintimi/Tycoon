import { Container, Row, Col } from "react-bootstrap";
import dotsImage from "../assets/images/service-patern.png";

function Features() {
  return (
    <section className="features" id="Features">
      <Container>
        <Row className="align-items-center">
          <Col xl={7}>
            <span className="text-primary">APP FEATURES</span>
            <h1 className="header-with-line pt-3">
              Your Experience Gets Better And Better Over Time.
            </h1>
            <p className="pt-3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </Col>
          <Col xl={5} className="right-aligned">
            <div className="wrapper">
              <h3>4.5</h3>
              <div className="rating-wrapper">
                <div className="stars">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star half">&#9733;</span>
                </div>
                <div className="reviews">From 10,000 Reviews</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col xl={3}>
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
              <h5 className="mb-3">Industry tested</h5>
              <p className="py-4">Discover, Explore & Understanding The Product</p>
              <a className="btn px-3 mt-auto mx-auto" href="">
                Read More
              </a>
            </div>
          </Col>
          <Col xl={3}>
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
              <h5 className="mb-3">Multimidia Integrate</h5>
              <p className="py-4">Art Direction & Brand Communication</p>
              <a className="btn px-3 mt-auto mx-auto" href="">
                Read More
              </a>
            </div>
          </Col>
          <Col xl={3}>
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
              <h5 className="mb-3">No Credit Card</h5>
              <p className="py-4">Marketing Strategy & SEO Campaigns</p>
              <a className="btn px-3 mt-auto mx-auto" href="">
                Read More
              </a>
            </div>
          </Col>
          <Col xl={3}>
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
              <h5 className="mb-3">2x Powerful</h5>
              <p className="py-4">Marketing Strategy & SEO Campaigns</p>
              <a className="btn px-3 mt-auto mx-auto" href="">
                Read More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={dotsImage} alt="Dots" className="dots-image" />
    </section>
  );
}

export default Features;
