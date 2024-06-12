import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DiAndroid, DiApple } from "react-icons/di";

function Newsletter() {
  return (
    <section className="newsletter">
      <Container>
        <Row className="pb-5">
          <Col xl={8}>
            <div className="wrapper2 d-flex flex-column justify-content-between">
              <div>
                <h6>Sign up for Newsletter</h6>
                <p className="pb-0 mb-0">
                  Sign Up and start using a free account <br />
                  to see what it's all about.
                </p>
              </div>
              <div className="d-flex pb-5">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="email-input"
                />
                <button className="btn btn_sign-up">Subscribe Now!</button>
              </div>
            </div>
          </Col>
          <Col xl={4}>
            <div className="wrapper3 d-flex flex-column justify-content-between">
              <div>
                <h4 className="text-dark pb-0">
                  Massive is available for all devices
                </h4>
                <p className="sub_text pb-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="app-store-buttons">
                <a
                  href="https://play.google.com"
                  className="store-button google-play"
                >
                  <DiAndroid className="store-icon" />
                  <span>
                    <small>Available on</small>
                    Google Play
                  </span>
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  className="store-button app-store"
                >
                  <DiApple className="store-icon" />
                  <span>
                    <small>Available on</small>
                        App Store
                  </span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;
