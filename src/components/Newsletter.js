import { Container, Row, Col } from "react-bootstrap";

function Newsletter (){

    return(
    
        <section className="newsletter">
            <Container>
                <Row>
                <Col xl={8}>
                <Row>
                <Col xl={7}>
                <div className="wrapper2 ">
                    <h6>Sign up for Newsletter</h6>
                    <p>Sign Up and start using a free account <br />
                    to see what it's all about.</p>
                    <input type="gmail"  placeholder="Your email address"/>
                </div>
                </Col>
                </Row>
                </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Newsletter;