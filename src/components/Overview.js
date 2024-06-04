import { Container, Row, Col } from "react-bootstrap";
import AppImg from "../assets/images/app-overview2.png"

function Overview() {
  return (
    <section className="overview">
      <Container>
        <Row  className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <span className="text-primary">APP OVERVIEW</span>
            <h1 className="header-with-line pt-3">
              Right There, Right When You Want It
            </h1>
            <p className="pt-3">
              We're a digital product and UX agency Strategy, design and
              development across all platforms.
            </p>
            <div className="d-flex py-3 ">
              <button className="btn1">Payment</button>
              <button className="btn2 ">Credit Card</button>
              <button className="btn2">Location</button>
            </div>
            <h5 className="pt-3">Payment Request</h5>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla .Nemo en ipsam voluptatem quia
              voluptas sit asper.
            </p>
            <ul>
              <li>Commitment to excellence</li>
              <li>Clients are our partners</li>
              <li>Fun is an absolute must</li>
            </ul>
          </Col>
          <Col xs={12} md={3} xl={3}/>
          <Col xs={12} md={3} xl={4}>
            <img src={AppImg} alt="" className="mb-5"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Overview;
