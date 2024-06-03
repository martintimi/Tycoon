import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import appimg from "../assets/images/app-overview.png"

function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <div className="jump-text">
              <h1>Make the world's Software more Accessible</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
              <button className="jump-text download" >
                Download Now
              </button>
            </div>
          </Col>
          <Col xs={12} md={3} xl={3}/>
          <Col xs={12} md={3} xl={4}>
            <img src={appimg} alt="" className="mb-5"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
